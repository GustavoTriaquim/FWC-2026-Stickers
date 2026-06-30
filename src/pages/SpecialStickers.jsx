import { Link, useParams } from "react-router-dom";
import { specialStickers } from "../data/specials";
import { useAlbum } from "../context/Album/AlbumContext";
import StickerCard from "../components/StickerCard";
import AppHeader from "../components/AppHeader";
import LoadingScreen from "../components/LoadingScreen";
import PageTransition from "../components/PageTransition";
import EmptyState from "../components/EmptyState";
import SequenceNav from "../components/SequenceNav";

function SpecialStickers() {
  const { mode } = useParams();
  const { filterByMode, countOwned, isLoading } = useAlbum();

  const visibleStickers = filterByMode(specialStickers, mode);
  const ownedCount = countOwned(specialStickers);
  const isRepetidas = mode === "repetidas";

  if (isLoading) return <LoadingScreen />;

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg-base flex flex-col">
        {/* Cabeçalho */}
        <AppHeader />

        {/* Grid de figurinhas */}
        <main className="flex-1 px-4 pb-8">
          {visibleStickers.length === 0 ? (
            <EmptyState
              title="Nenhuma repetida do FWC ainda"
              subtitle="Quando você marcar uma segunda cópia, ela aparece aqui"
            />
          ) : (
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
              {visibleStickers.map((sticker) => (
                <StickerCard
                  key={sticker.id}
                  stickerId={sticker.id}
                  label={sticker.label}
                  accentColor="f1f1f1"
                />
              ))}
            </div>
          )}
        </main>

        <div className="pb-6">
          <SequenceNav type="fwc" id="fwc" />
        </div>
      </div>
    </PageTransition>
  );
}

export default SpecialStickers;
