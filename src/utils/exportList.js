import { allTeams } from "../data/teams";
import { buildTeamStickers } from "../data/stickers";
import { specialStickers } from "../data/specials";

function buildNumberList(stickers, counts, predicate) {
  return stickers
    .filter((s) => predicate(counts[s.id] || 0))
    .map((s) => s.number)
    .join(", ");
}

export function buildExportText(counts) {
  const lines = ["Figurinhas - Lista", "", "Faltantes"];

  const fwcMissing = buildNumberList(specialStickers, counts, (c) => c === 0);

  if (fwcMissing) lines.push(`FWC 🏆> ${fwcMissing}`);

  allTeams.forEach((team) => {
    const stickers = buildTeamStickers(team.id);
    const missing = buildNumberList(stickers, counts, (c) => c === 0);

    if (missing) lines.push(`${team.code} ${team.flag}: ${missing}`);
  });

  lines.push("", "Repetidas");

  const fwcExtras = buildNumberList(specialStickers, counts, (c) => c >= 2);

  if (fwcExtras) lines.push(`FWC 🏆: ${fwcExtras}`);

  allTeams.forEach((team) => {
    const stickers = buildTeamStickers(team.id);
    const extras = buildNumberList(stickers, counts, (c) => c >= 2);

    if (extras) lines.push(`${team.code} ${team.flag}: ${extras}`);
  });

  return lines.join("\n");
}
