import { useState, useEffect, useCallback, useMemo } from "react";
import { AlbumContext } from "./AlbumContext";
import { allTeams } from "../data/teams";
import { buildTeamStickers } from "../data/stickers";
import { specialStickers } from "../data/specials";

export function AlbumProvider({ children }) {
  const [counts, setCounts] = useState({});

  const getCount = useCallback((stickerId) => counts[stickerId] || 0, [counts]);

  const increment = useCallback((stickerId) => {
    setCounts((prev) => ({
      ...prev,
      [stickerId]: (prev[stickerId] || 0) + 1,
    }));
  }, []);

  const decrement = useCallback((stickerId) => {
    setCounts((prev) => {
      const current = prev[stickerId] || 0;
      if (current <= 0) return prev;
      return { ...prev, [stickerId]: current - 1 };
    });
  }, []);

  const filterByMode = useCallback(
    (stickerList, mode) => {
      if (mode === "repetidas") {
        return stickerList.filter((s) => (counts[s.id] || 0) >= 2);
      }
      return stickerList;
    },
    [counts],
  );

  const countOwned = useCallback(
    (stickerList) => stickerList.filter((s) => (counts[s.id] || 0) >= 1).length,
    [counts],
  );

  // Soma quantas cópias "de sobra" existem numa lista de stickers (ex: as 20 de um time).
  const countExtras = useCallback(
    (stickerList) =>
      stickerList.reduce((sum, s) => {
        const count = counts[s.id] || 0;
        return count >= 2 ? sum + (count - 1) : sum;
      }, 0),
    [counts],
  );

  // Lista de TODOS os ids de figurinha do álbum inteiro (48 times × 20 + 20 FWC = 1000).
  // useMemo porque essa lista nunca muda — não precisa recalcular a cada render.
  const allStickerIds = useMemo(() => {
    const teamIds = allTeams.flatMap((team) =>
      buildTeamStickers(team.id).map((s) => s.id),
    );
    const fwcIds = specialStickers.map((s) => s.id);
    return [...teamIds, ...fwcIds];
  }, []);

  // Estatísticas gerais do álbum: total de figurinhas únicas que você tem,
  // total possível, e quantas cópias de sobra existem (somando todas as repetidas).
  const getAlbumStats = useCallback(() => {
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
  };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
}
