import { getTeamById } from "./teams";

// Gera os 20 ids de figurinha de um time: CODE01 até CODE20.
export function buildTeamStickers(teamId) {
  const team = getTeamById(teamId);
  if (!team) return [];

  const stickers = [];
  for (let i = 1; i <= 20; i++) {
    const number = String(i).padStart(2, "0");
    stickers.push({
      id: `${team.code}${number}`,
      teamId: team.id,
      code: team.code,
      number,
      label: `${team.code}${number}`,
    });
  }
  return stickers;
}
