import { Link, useParams } from "react-router-dom";
import { specialStickers } from "../data/specials";
import { useAlbum } from "../context/AlbumContext";
import StickerCard from "../components/StickerCard";
import AppHeader from "../components/AppHeader";
import LoadingScreen from "../components/LoadingScreen";

function SpecialStickers() {
  const { mode } = useParams();
  const { filterByMode, countOwned, isLoading } = useAlbum();

  const visibleStickers = filterByMode(specialStickers, mode);
  const ownedCount = countOwned(specialStickers);
  const isRepetidas = mode === "repetidas";

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      {/* Cabeçalho */}
      <AppHeader />

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
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default SpecialStickers;
