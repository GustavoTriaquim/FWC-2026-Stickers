// Figurinhas especiais: página inicial (FWC00-08) e página final (FWC09-19).
// Não pertencem a nenhuma seleção.

function buildSpecialRange(start, end) {
  const stickers = [];
  for (let i = start; i <= end; i++) {
    const number = String(i).padStart(2, "0");
    stickers.push({
      id: `FWC${number}`,
      code: "FWC",
      number,
      label: `FWC${number}`,
    });
  }
  return stickers;
}

export const specialStickers = [
  ...buildSpecialRange(0, 8), // página inicial
  ...buildSpecialRange(9, 19), // página final
];
