import { Link, useParams } from "react-router-dom";
import GroupCarousel from "../components/GroupCarousel";

function MainMenu() {
  const { mode } = useParams();
  const isRepetidas = mode === "repetidas";
  const modeLabel = isRepetidas ? "Repetidas" : "Coleção";
  const modeColor = isRepetidas ? "text-copa-gold" : "text-copa-green";

  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      {/* Cabeçalho com indicador de modo */}
      <header className="pt-6 pb-4 px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-text-muted text-sm flex items-center gap-1 hover:text-text-primary transition-colors"
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
        <span
          className={`font-mono text-xs tracking-widest uppercase ${modeColor}`}
        >
          Modo: {modeLabel}
        </span>
      </header>

      {/* Card FWC — faixa horizontal no topo */}
      <div className="px-4">
        <Link
          to={`/${mode}/fwc`}
          className="group flex items-center gap-4 rounded-2xl bg-bg-card border border-border-subtle
                     hover:bg-bg-elevated hover:border-copa-gold/40
                     transition-colors duration-200 px-5 py-4"
        >
          <svg
            className="w-9 h-9 text-copa-gold shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 5H4a1 1 0 0 0-1 1c0 2 1 4 4 4M17 5h3a1 1 0 0 1 1 1c0 2-1 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h2 className="font-display text-base text-text-primary uppercase">
              FWC
            </h2>
            <p className="text-text-muted text-sm">
              Figurinhas especiais · FWC00 – FWC19
            </p>
          </div>
        </Link>
      </div>

      {/* Carrossel de seleções — ocupa o resto da tela */}
      <main className="flex-1 flex flex-col mt-4">
        <h3 className="font-mono text-text-muted text-xs tracking-widest px-4 mb-1">
          SELEÇÕES
        </h3>
        <GroupCarousel mode={mode} />
      </main>
    </div>
  );
}

export default MainMenu;
