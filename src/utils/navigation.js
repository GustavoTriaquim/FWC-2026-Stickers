import { allTeams } from "../data/teams";

// Sequência completa do álbum: os 48 times (na ordem de grupo A→L) + FWC no final.
// Cada entrada tem um "to" (destino de navegação) e um "label" (nome pra exibir).
const FWC_STEP = { type: "fwc", id: "fwc", label: "FWC" };

function buildSequence() {
  const teamSteps = allTeams.map((team) => ({
    type: "team",
    id: team.id,
    label: team.name,
  }));
  return [...teamSteps, FWC_STEP];
}

const sequence = buildSequence();

// Acha a posição de um item (time ou fwc) na sequência.
function findIndex(type, id) {
  return sequence.findIndex((step) => step.type === type && step.id === id);
}

// Dado o tipo/id atual, retorna { prev, next } com os destinos de navegação,
// já em loop (do último volta pro primeiro, e vice-versa).
export function getAdjacent(type, id) {
  const currentIndex = findIndex(type, id);
  if (currentIndex === -1) return { prev: null, next: null };

  const prevIndex = (currentIndex - 1 + sequence.length) % sequence.length;
  const nextIndex = (currentIndex + 1) % sequence.length;

  return {
    prev: sequence[prevIndex],
    next: sequence[nextIndex],
  };
}

// Converte um "step" da sequência (time ou fwc) numa URL navegável.
export function stepToPath(mode, step) {
  if (!step) return null;
  return step.type === "fwc" ? `/${mode}/fwc` : `/${mode}/time/${step.id}`;
}
