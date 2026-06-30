import { Link, useParams, Navigate } from "react-router-dom";
import { getTeamById } from "../data/teams";
import { buildTeamStickers } from "../data/stickers";
import { useAlbum } from "../context/Album/AlbumContext";
import StickerCard from "../components/StickerCard";
import AppHeader from "../components/AppHeader";
import LoadingScreen from "../components/LoadingScreen";
import PageTransition from "../components/PageTransition";
import EmptyState from "../components/EmptyState";
import SequenceNav from "../components/SequenceNav";

function TeamStickers() {
  const { mode, teamId } = useParams();
  const { filterByMode, countOwned, isLoading } = useAlbum();

  const team = getTeamById(teamId);

  // Se o teamId da URL não existir nos dados, volta pro menu em vez de quebrar a tela.
  if (!team) {
    return <Navigate to={`/${mode}`} replace />;
  }

  if (isLoading) return <LoadingScreen />;

  const allStickers = buildTeamStickers(teamId);
  const visibleStickers = filterByMode(allStickers, mode);
  const ownedCount = countOwned(allStickers);
  const isRepetidas = mode === "repetidas";

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg-base flex flex-col">
        {/* Cabeçalho com a cor do time como destaque */}
        <AppHeader />

        {/* Grid de figurinhas */}
        <main className="flex-1 px-4 pb-8">
          {visibleStickers.length === 0 ? (
            <p className="text-text-muted text-center mt-12">
              Nenhuma figurinha repetida de {team.name} ainda.
            </p>
          ) : (
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
              {visibleStickers.map((sticker) => (
                <StickerCard
                  key={sticker.id}
                  stickerId={sticker.id}
                  label={sticker.label}
                  accentColor={team.color}
                />
              ))}
            </div>
          )}
        </main>

        <div className="pb-6">
          <SequenceNav type="team" id={teamId} />
        </div>
      </div>
    </PageTransition>
  );
}

export default TeamStickers;
