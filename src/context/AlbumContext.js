import { createContext, useContext } from "react";

export const AlbumContext = createContext(null);

export function useAlbum() {
  const context = useContext(AlbumContext);
  if (!context) {
    throw new Error("useAlbum precisa ser usado dentro de um AlbumProvider");
  }
  return context;
}
