import { Link } from "react-router-dom";

function ModeSelect() {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      {/* Cabeçalho */}
      <header className="pt-10 pb-6 text-center">
        <h1 className="font-display text-xl md:text-2xl text-text-primary uppercase tracking-light">
          Copa Figurinhas
        </h1>
        <p className="font-mono text-fifa-gold text-xs tracking-widest mt-1">
          2026 · MÉXICO · EUA · CANADÁ
        </p>
      </header>

      <main className="flex-1 flex flex-col md:flex-row gap-3 p-3 md:p-4">
        <Link
          to="/colecao"
          className="group flex-1 rounded-2xl bg-bg-card border border-border-subtle flex flex-col item-center justify-center gap-4 hover:bg-bg-elevated hover:border-fifa-green/40 transition-colors duration-200 min-h-55"
        >
          <svg
            className="w-12 h-12 text-fifa-green"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 2H20v20H6.5A2 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="text-center">
            <h2 className="font-display text-lg text-text-primary uppercase">
              Coleção
            </h2>
            <p className="text-text-muted text-sm mt-1">Ver o álbum</p>
          </div>
        </Link>

        <Link
          to="/repetidas"
          className="group flex-1 rounded-2xl bg-bg-card border border-border-subtle flex flex-col items-centere justify-center gap-4 hover:bg-bg-elevated hover:border-fifa-gold/40 transition-colors duration-200 min-h-55 md:min-h-0"
        >
          <svg
            className="w-12 h-12 text-fifa-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect
              x="3"
              y="3"
              width="13"
              height="13"
              rx="2"
              strokeLinejoin="round"
            />
            <path
              d="M8 16v2.5A2.5 2.5 0 0 0 10.5 21H18.5A2.5 2.5 0 0 0 21 18.5V10.5A2.5 2.5 0 0 0 18.5 8H16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="text-center">
            <h2 className="font-display text-lg text-text-primary uppercase">
              Repetidas
            </h2>
            <p className="text-text-muted text-sm mt-1">
              Ver figurinhas disponíveis para trocar
            </p>
          </div>
        </Link>
      </main>
    </div>
  );
}

export default ModeSelect;
