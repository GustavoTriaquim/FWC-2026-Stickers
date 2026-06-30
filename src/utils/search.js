import { allTeams } from "../data/teams";

// Resultado de busca: sempre representa "para onde navegar" (um time ou o FWC).
// matchInfo ajuda a explicar por que esse resultado apareceu (ex: "figurinha 05").

const FWC_ENTRY = {
  type: "fwc",
  id: "fwc",
  code: "FWC",
  name: "FWC",
  flag: "🏆",
};

export function searchAlbum(query) {
  const q = query.trim().toUpperCase();
  if (!q) return [];

  const results = [];

  // Função auxiliar: adiciona um resultado sem duplicar (caso bata por mais de um critério)
  const addResult = (entry, reason) => {
    if (!results.find((r) => r.id === entry.id)) {
      results.push({ ...entry, reason });
    }
  };

  // Caso 1: número puro (ex: "05") → lista todos os times + FWC que têm essa figurinha
  const isNumberOnly = /^\d{1,2}$/.test(q);
  if (isNumberOnly) {
    const padded = q.padStart(2, "0");
    allTeams.forEach((team) => {
      addResult(team, `Figurinha ${team.code}${padded}`);
    });
    addResult(FWC_ENTRY, `Figurinha FWC${padded}`);
    return results;
  }

  // Caso 2: nome do time (busca parcial, sem acento sensível por enquanto)
  allTeams.forEach((team) => {
    const nameMatch = team.name.toUpperCase().includes(q);
    const codeMatch = team.code.includes(q);
    if (nameMatch) addResult(team, team.name);
    else if (codeMatch) addResult(team, team.code);
  });

  // Caso 3: "FWC" ou código de figurinha FWC (ex: "FWC03")
  if ("FWC".includes(q) || q.startsWith("FWC")) {
    addResult(FWC_ENTRY, "FWC");
  }

  return results;
}
