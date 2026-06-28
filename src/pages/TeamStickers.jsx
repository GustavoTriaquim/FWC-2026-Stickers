import { Link, useParams, Navigate } from "react-router-dom";
import { getTeamById } from "../data/teams";
import { buildTeamStickers } from "../data/stickers";
import { useAlbum } from "../context/AlbumContext";
import StickerCard from "../components/StickerCard";

function TeamStickers() {
  const { mode, teamId } = useParams();
  const { filterByMode, countOwned } = useAlbum();

  const team = getTeamById(teamId);

  // Se o teamId da URL não existir nos dados, volta pro menu em vez de quebrar a tela.
  if (!team) {
    return <Navigate to={`/${mode}`} replace />;
  }

  const allStickers = buildTeamStickers(teamId);
  const visibleStickers = filterByMode(allStickers, mode);
  const ownedCount = countOwned(allStickers);
  const isRepetidas = mode === "repetidas";

  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      {/* Cabeçalho com a cor do time como destaque */}
      <header className="pt-6 pb-4 px-4">
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
          <div className="flex items-center gap-3">
            <span className="text-3xl leading-none">{team.flag}</span>
            <div>
              <h1 className="font-display text-xl text-text-primary uppercase">
                {team.name}
              </h1>
              <p className="font-mono text-text-muted text-sm">
                Grupo {team.group} · {team.code}
              </p>
            </div>
          </div>
          {!isRepetidas && (
            <span
              className="font-mono text-sm px-2 py-1 rounded-md"
              style={{ color: team.color, backgroundColor: `${team.color}1a` }}
            >
              {ownedCount}/{allStickers.length}
            </span>
          )}
        </div>

        {/* Barra de progresso fininha, usando a cor oficial do time */}
        {!isRepetidas && (
          <div className="w-full h-1 bg-bg-card rounded-full mt-3 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${(ownedCount / allStickers.length) * 100}%`,
                backgroundColor: team.color,
              }}
            />
          </div>
        )}
      </header>

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
                mode={mode}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default TeamStickers;
