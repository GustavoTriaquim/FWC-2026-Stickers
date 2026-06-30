import { useState, useEffect, useCallback, useMemo } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  increment as fsIncrement,
} from "firebase/firestore";
import { AlbumContext } from "./AlbumContext";
import { db } from "../firebase";
import { allTeams } from "../data/teams";
import { buildTeamStickers } from "../data/stickers";
import { specialStickers } from "../data/specials";

// Referência ao documento único do álbum no Firestore.
const albumRef = doc(db, "albums", "album-principal");

export function AlbumProvider({ children }) {
  // counts: espelho local do campo "counts" do documento no Firestore.
  // Começa como null (ainda não carregou) e depois vira um objeto { [id]: number }.
  const [counts, setCounts] = useState(null);

  // Abre a conexão em tempo real com o Firestore assim que o Provider monta.
  // onSnapshot chama o callback imediatamente com os dados atuais, e depois
  // toda vez que o documento mudar (de qualquer dispositivo).
  useEffect(() => {
    const unsubscribe = onSnapshot(albumRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setCounts(data.counts || {});
      }
    });

    // Fecha a conexão quando o Provider desmonta (cleanup padrão do useEffect).
    return () => unsubscribe();
  }, []);

  const getCount = useCallback(
    (stickerId) => (counts ? counts[stickerId] || 0 : 0),
    [counts],
  );

  // increment: usa o fsIncrement do Firestore (operação atômica no servidor).
  // Isso garante que dois usuários editando ao mesmo tempo não se conflitam.
  const increment = useCallback(async (stickerId) => {
    await updateDoc(albumRef, {
      [`counts.${stickerId}`]: fsIncrement(1),
    });
  }, []);

  // decrement: mesma coisa, mas subtrai 1 — com um guard pra não ir abaixo de 0.
  const decrement = useCallback(
    async (stickerId) => {
      const current = counts ? counts[stickerId] || 0 : 0;
      if (current <= 0) return;
      await updateDoc(albumRef, {
        [`counts.${stickerId}`]: fsIncrement(-1),
      });
    },
    [counts],
  );

  const filterByMode = useCallback(
    (stickerList, mode) => {
      if (!counts) return [];
      if (mode === "repetidas") {
        return stickerList.filter((s) => (counts[s.id] || 0) >= 2);
      }
      return stickerList;
    },
    [counts],
  );

  const countOwned = useCallback(
    (stickerList) => {
      if (!counts) return 0;
      return stickerList.filter((s) => (counts[s.id] || 0) >= 1).length;
    },
    [counts],
  );

  const countExtras = useCallback(
    (stickerList) => {
      if (!counts) return 0;
      return stickerList.reduce((sum, s) => {
        const count = counts[s.id] || 0;
        return count >= 2 ? sum + (count - 1) : sum;
      }, 0);
    },
    [counts],
  );

  const allStickerIds = useMemo(() => {
    const teamIds = allTeams.flatMap((team) =>
      buildTeamStickers(team.id).map((s) => s.id),
    );
    const fwcIds = specialStickers.map((s) => s.id);
    return [...teamIds, ...fwcIds];
  }, []);

  const getAlbumStats = useCallback(() => {
    if (!counts)
      return { owned: 0, total: allStickerIds.length, totalExtras: 0 };

    let owned = 0;
    let totalExtras = 0;

    allStickerIds.forEach((id) => {
      const count = counts[id] || 0;
      if (count >= 1) owned += 1;
      if (count >= 2) totalExtras += count - 1;
    });

    return {
      owned,
      total: allStickerIds.length,
      totalExtras,
    };
  }, [allStickerIds, counts]);

  const value = {
    counts,
    getCount,
    increment,
    decrement,
    filterByMode,
    countOwned,
    countExtras,
    getAlbumStats,
    isLoading: counts === null,
  };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
}
