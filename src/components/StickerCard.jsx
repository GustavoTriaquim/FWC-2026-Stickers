import { useState, useCallback } from "react";
import { useAlbum } from "../context/AlbumContext";

function StickerCard({ stickerId, label, accentColor = "#00a94f" }) {
  const { getCount, increment, decrement } = useAlbum();
  const count = getCount(stickerId);

  const isEmpty = count === 0;
  const hasExtra = count >= 2;
  const extraCount = count - 1;

  const [animation, setAnimation] = useState(null); // "pop" | "dip" | null

  const triggerAnimation = useCallback((type) => {
    setAnimation(type);
    setTimeout(() => setAnimation(null), 180);
  }, []);

  const handleIncrement = useCallback(
    (e) => {
      e?.stopPropagation();
      increment(stickerId);
      triggerAnimation("pop");
    },
    [increment, stickerId, triggerAnimation],
  );

  const handleDecrement = useCallback(
    (e) => {
      e?.stopPropagation();
      if (count === 0) return;
      decrement(stickerId);
      triggerAnimation("dip");
    },
    [decrement, stickerId, count, triggerAnimation],
  );

  return (
    <div
      className={`
        relative aspect-square rounded-xl flex flex-col items-center justify-center
        transition-colors duration-200 cursor-pointer select-none
        ${
          isEmpty
            ? "border-2 border-dashed border-border-subtle bg-bg-slot"
            : "border"
        }
        ${animation === "pop" ? "animate-sticker-pop" : ""}
        ${animation === "dip" ? "animate-sticker-dip" : ""}
      `}
      style={
        !isEmpty
          ? {
              backgroundColor: `${accentColor}18`,
              borderColor: `${accentColor}60`,
            }
          : {}
      }
      onClick={handleIncrement}
    >
      {/* Selo de repetidas */}
      {hasExtra && (
        <span
          className="absolute -top-1.5 -right-1.5 text-bg-base text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-full"
          style={{
            backgroundColor:
              accentColor === "#ffffff" ? "#c9a646" : accentColor,
          }}
        >
          {extraCount}x
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

      {/* Controles */}
      <div className="flex items-center gap-2 mt-1.5">
        <button
          onClick={handleDecrement}
          disabled={count === 0}
          className={`flex items-center justify-center rounded-full
                     bg-bg-elevated text-text-muted
                     disabled:opacity-20 hover:bg-fifa-red/20 hover:text-fifa-red
                     transition-colors
                     ${
                       hasExtra
                         ? "w-6 h-6 md:w-5 md:h-5 text-sm md:text-xs"
                         : "w-5 h-5 text-xs"
                     }`}
          aria-label="Remover"
        >
          −
        </button>

        <button
          onClick={handleIncrement}
          className="hidden md:flex w-5 h-5 items-center justify-center rounded-full
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
