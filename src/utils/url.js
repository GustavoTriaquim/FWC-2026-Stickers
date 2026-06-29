// Troca o segmento de modo na URL atual, mantendo o resto do caminho.
// Ex: "/colecao/time/bra" + "repetidas" -> "/repetidas/time/bra"
export function swapMode(pathname, newMode) {
  const segments = pathname.split("/").filter(Boolean); // remove strings vazias
  segments[0] = newMode; // primeiro segmento é sempre o modo
  return "/" + segments.join("/");
}
