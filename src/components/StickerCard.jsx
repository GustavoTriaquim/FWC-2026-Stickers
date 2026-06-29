import { useAlbum } from "../context/AlbumContext";

function StickerCard({ stickerId, label, mode }) {
  const { getCount, increment, decrement } = useAlbum();
  const count = getCount(stickerId);

  const isEmpty = count === 0;
  const hasExtra = count >= 2;

  return (
    <div
      className={`relative aspect-square rounded-xl flex flex-col items-center justify-center
        transition-colors duration-150
        ${
          isEmpty
            ? "border-2 border-dashed border-border-subtle bg-bg-slot"
            : "border border-border-subtle bg-bg-card"
        }
      `}
    >
      {/* Selo de repetida — aparece em qualquer modo quando count >= 2 */}
      {hasExtra && (
        <span className="absolute -top-1.5 -right-1.5 bg-fifa-gold text-bg-base text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-full">
          ×{count}
        </span>
      )}

      {/* Código da figurinha */}
      <span
        className={`font-mono text-sm font-medium ${
          isEmpty ? "text-text-dim" : "text-text-primary"
        }`}
      >
        {label}
      </span>

      {/* Controles +/- */}
      <div className="flex items-center gap-2 mt-1.5">
        <button
          onClick={() => decrement(stickerId)}
          disabled={count === 0}
          className="w-5 h-5 flex items-center justify-center rounded-full
                     bg-bg-elevated text-text-muted text-xs
                     disabled:opacity-20 hover:bg-fifa-red/20 hover:text-fifa-red
                     transition-colors"
          aria-label="Remover"
        >
          −
        </button>
        <button
          onClick={() => increment(stickerId)}
          className="w-5 h-5 flex items-center justify-center rounded-full
                     bg-bg-elevated text-text-muted text-xs
                     hover:bg-fifa-green/20 hover:text-fifa-green
                     transition-colors"
          aria-label="Adicionar"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default StickerCard;
