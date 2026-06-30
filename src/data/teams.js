import { specialStickers } from "./specials";

// Times agrupados por grupo (A-L), com seus códigos oficiais de figurinha.
export const groups = {
  A: [
    {
      id: "mex",
      code: "MEX",
      name: "México",
      flag: "🇲🇽",
      color: "#006847",
    },
    {
      id: "rsa",
      code: "RSA",
      name: "África do Sul",
      flag: "🇿🇦",
      color: "#007749",
    },
    {
      id: "kor",
      code: "KOR",
      name: "Coréia do Sul",
      flag: "🇰🇷",
      color: "#0047a0",
    },
    {
      id: "cze",
      code: "CZE",
      name: "Rep. Tcheca",
      flag: "🇨🇿",
      color: "#11457e",
    },
  ],
  B: [
    {
      id: "can",
      code: "CAN",
      name: "Canadá",
      flag: "🇨🇦",
      color: "#ff0000",
    },
    {
      id: "bih",
      code: "BIH",
      name: "Bósnia",
      flag: "🇧🇦",
      color: "#002395",
    },
    {
      id: "qat",
      code: "QAT",
      name: "Catar",
      flag: "🇶🇦",
      color: "#8d1b3d",
    },
    {
      id: "sui",
      code: "SUI",
      name: "Suíça",
      flag: "🇨🇭",
      color: "#d52b1e",
    },
  ],
  C: [
    {
      id: "bra",
      code: "BRA",
      name: "Brasil",
      flag: "🇧🇷",
      color: "#009c3b",
    },
    {
      id: "mar",
      code: "MAR",
      name: "Marrocos",
      flag: "🇲🇦",
      color: "#c1272d",
    },
    {
      id: "hai",
      code: "HAI",
      name: "Haiti",
      flag: "🇭🇹",
      color: "#00209f",
    },
    {
      id: "sco",
      code: "SCO",
      name: "Escócia",
      flag: "🏴",
      color: "#0065bd",
    },
  ],
  D: [
    {
      id: "usa",
      code: "USA",
      name: "Estados Unidos",
      flag: "🇺🇸",
      color: "#3c3b6e",
    },
    {
      id: "par",
      code: "PAR",
      name: "Paraguai",
      flag: "🇵🇾",
      color: "#d52b1e",
    },
    {
      id: "aus",
      code: "AUS",
      name: "Austrália",
      flag: "🇦🇺",
      color: "#00008b",
    },
    {
      id: "tur",
      code: "TUR",
      name: "Turquia",
      flag: "🇹🇷",
      color: "#e30a17",
    },
  ],
  E: [
    {
      id: "ger",
      code: "GER",
      name: "Alemanha",
      flag: "🇩🇪",
      color: "#3a3a3a",
    },
    {
      id: "cuw",
      code: "CUW",
      name: "Curaçao",
      flag: "🇨🇼",
      color: "#002b7f",
    },
    {
      id: "civ",
      code: "CIV",
      name: "Costa do Marfim",
      flag: "🇨🇮",
      color: "#f77f00",
    },
    {
      id: "ecu",
      code: "ECU",
      name: "Equador",
      flag: "🇪🇨",
      color: "#ffd100",
    },
  ],
  F: [
    {
      id: "ned",
      code: "NED",
      name: "Holanda",
      flag: "🇳🇱",
      color: "#ae1c28",
    },
    {
      id: "jap",
      code: "JAP",
      name: "Japão",
      flag: "🇯🇵",
      color: "#bc002d",
    },
    {
      id: "swe",
      code: "SWE",
      name: "Suécia",
      flag: "🇸🇪",
      color: "#006aa7",
    },
    {
      id: "tun",
      code: "TUN",
      name: "Tunísia",
      flag: "🇹🇳",
      color: "#e70013",
    },
  ],
  G: [
    {
      id: "bel",
      code: "BEL",
      name: "Bélgica",
      flag: "🇧🇪",
      color: "#ed2939",
    },
    {
      id: "egy",
      code: "EGY",
      name: "Egito",
      flag: "🇪🇬",
      color: "#c8102e",
    },
    {
      id: "irn",
      code: "IRN",
      name: "Irã",
      flag: "🇮🇷",
      color: "#239f40",
    },
    {
      id: "nzl",
      code: "NZL",
      name: "Nova Zelândia",
      flag: "🇳🇿",
      color: "#00247d",
    },
  ],
  H: [
    {
      id: "esp",
      code: "ESP",
      name: "Espanha",
      flag: "🇪🇸",
      color: "#c8102e",
    },
    {
      id: "cpv",
      code: "CPV",
      name: "Cabo Verde",
      flag: "🇨🇻",
      color: "#003893",
    },
    {
      id: "ksa",
      code: "KSA",
      name: "Arábia Saudita",
      flag: "🇸🇦",
      color: "#006c35",
    },
    {
      id: "uru",
      code: "URU",
      name: "Uruguai",
      flag: "🇺🇾",
      color: "#7bb2dd",
    },
  ],
  I: [
    {
      id: "fra",
      code: "FRA",
      name: "França",
      flag: "🇫🇷",
      color: "#0055a4",
    },
    {
      id: "sen",
      code: "SEN",
      name: "Senegal",
      flag: "🇸🇳",
      color: "#00853f",
    },
    {
      id: "irq",
      code: "IRQ",
      name: "Iraque",
      flag: "🇮🇶",
      color: "#ce1126",
    },
    {
      id: "nor",
      code: "NOR",
      name: "Noruega",
      flag: "🇳🇴",
      color: "#ba0c2f",
    },
  ],
  J: [
    {
      id: "arg",
      code: "ARG",
      name: "Argentina",
      flag: "🇦🇷",
      color: "#75aadb",
    },
    {
      id: "alg",
      code: "ALG",
      name: "Argélia",
      flag: "🇩🇿",
      color: "#006233",
    },
    {
      id: "aut",
      code: "AUT",
      name: "Áustria",
      flag: "🇦🇹",
      color: "#ed2939",
    },
    {
      id: "jor",
      code: "JOR",
      name: "Jordânia",
      flag: "🇯🇴",
      color: "#007a3d",
    },
  ],
  K: [
    {
      id: "por",
      code: "POR",
      name: "Portugal",
      flag: "🇵🇹",
      color: "#006600",
    },
    {
      id: "cod",
      code: "COD",
      name: "Congo",
      flag: "🇨🇩",
      color: "#007fff",
    },
    {
      id: "uzb",
      code: "UZB",
      name: "Uzbequistão",
      flag: "🇺🇿",
      color: "#0099b5",
    },
    {
      id: "col",
      code: "COL",
      name: "Colômbia",
      flag: "🇨🇴",
      color: "#fcd116",
    },
  ],
  L: [
    {
      id: "eng",
      code: "ENG",
      name: "Inglaterra",
      flag: "🏴",
      color: "#ce1124",
    },
    {
      id: "cro",
      code: "CRO",
      name: "Croácia",
      flag: "🇭🇷",
      color: "#171796",
    },
    {
      id: "gha",
      code: "GHA",
      name: "Gana",
      flag: "🇬🇭",
      color: "#ce1126",
    },
    {
      id: "pan",
      code: "PAN",
      name: "Panamá",
      flag: "🇵🇦",
      color: "#005293",
    },
  ],
};

// Lista plana de todos os times, cada um com seu grupo anexado.
// Útil pra buscar um time direto pelo id, sem precisar varrer os grupos.
export const allTeams = Object.entries(groups).flatMap(([groupLetter, teams]) =>
  teams.map((team) => ({ ...team, group: groupLetter })),
);

export function getTeamById(teamId) {
  return allTeams.find((team) => team.id === teamId);
}

export function getTeamsByGroup(groupLetter) {
  return groups[groupLetter] || [];
}

// Agrupa os 12 grupos em pares consecutivos para o carrossel (A+B, C+D, ..., K+L).
export function getGroupPairs() {
  const letters = Object.keys(groups); // ["A", "B", ..., "L"]
  const pairs = [];
  for (let i = 0; i < letters.length; i += 2) {
    pairs.push([letters[i], letters[i + 1]]);
  }
  return pairs;
}
