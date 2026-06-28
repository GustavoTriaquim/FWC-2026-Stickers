import { useState, useCallback } from "react";
import { AlbumContext } from "./AlbumContext";

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

  const value = {
    counts,
    getCount,
    increment,
    decrement,
    filterByMode,
    countOwned,
  };

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
}
