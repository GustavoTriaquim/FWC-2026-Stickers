import { Link, useParams } from "react-router-dom";
import { specialStickers } from "../data/specials";
import { useAlbum } from "../context/AlbumContext";
import StickerCard from "../components/StickerCard";

function SpecialStickers() {
  const { mode } = useParams();
  const { filterByMode, countOwned } = useAlbum();

  const visibleStickers = filterByMode(specialStickers, mode);
  const ownedCount = countOwned(specialStickers);
  const isRepetidas = mode === "repetidas";

  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      {/* Cabeçalho */}
      <header className="pt-6 pb-4 px4">
        <Link
          to={`/${mode}`}
          className="text-text-muted text-sm flex items-center gap-1 hover:text-text-primary transition-colors mb-3"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Voltar
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl text-text-primary uppercase">
              FWC
            </h1>
            <p text-text-muted text-sm>
              Figurinhas especiais
            </p>
          </div>
          {!isRepetidas && (
            <span className="font-mono text-fifa-gold text-sm">
              {ownedCount}/{specialStickers.length}
            </span>
          )}
        </div>
      </header>

      {/* Grid de figurinhas */}
      <main className="flex-1 px-4 pb-8">
        {visibleStickers.length === 0 ? (
          <p className="text-text-muted text-center mt-12">
            Nenhuma figurinha repetida por aqui ainda.
          </p>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
            {visibleStickers.map((sticker) => (
              <StickerCard
                key={sticker.id}
                stickerId={sticker.id}
                label={sticker.label}
                mode={mode}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default SpecialStickers;
