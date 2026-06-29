import { Link } from "react-router-dom";
import { useAlbum } from "../context/AlbumContext";
import ProgressBar from "../components/ProgressBar";
import ThemeToggle from "../components/ThemeToggle";

function ModeSelect() {
  const { getAlbumStats } = useAlbum();
  const { owned, total, totalExtras } = getAlbumStats();

  return (
    <div className="min-h-screen bg-bg-base flex flex-col">
      <header className="pt-14 pb-6 px-4 relative flex flex-col items-center text-center">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <h1 className="font-display text-xl md:text-2xl text-text-primary uppercase tracking-tight">
          Copa Figurinhas
        </h1>
        <p className="font-mono text-fifa-gold text-xs tracking-widest mt-1">
          2026 · MÉXICO · EUA · CANADÁ
        </p>

        <div className="w-full max-w-xs mt-4">
          <ProgressBar
            value={owned}
            total={total}
            color="var(--color-fifa-blue)"
          />
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row gap-3 p-3 md:p-4 items-center justify-center">
        <Link
          to="/colecao"
          className="group w-full md:flex-1 max-w-sm md:max-w-none rounded-2xl bg-bg-card border border-border-subtle flex items-center md:flex-col gap-4 md:gap-3 hover:bg-bg-elevated hover:border-fifa-green/40 transition-colors duration-200 px-5 py-5 md:py-8"
        >
          <svg
            className="w-10 h-10 md:w-12 md:h-12 text-fifa-green shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M4 195A2.5 2.5 0 0 1 6.5 17H20"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="text-left md:text-center">
            <h2 className="font-display text-base md:text-lg text-text-primary uppercase">
              Coleção
            </h2>
            <p className="text-text-muted text-sm mt-0.5">
              {owned}/{total}
            </p>
          </div>
        </Link>

        <Link
          to="/repetidas"
          className="group w-full md:flex-1 max-w-sm md:max-w-none rounded-2xl bg-bg-card border border-border-subtle flex items-center md:flex-col gap-4 md:gap-3 hover:bg-bg-elevated hover:border-copa-gold/40 transition-colors duration-200 px-5 py-5 md:py-8"
        >
          <svg
            className="w-10 h-10 md:w-12 md:h-12 text-fifa-gold shrink-0"
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
              d="M8 16v2.5A2.5 2.5 0 0 0 10.5 21H18 5A2.5 2.5 0 0 0 21 18.5V10.5A2.5 2.5 0 0 0 18.5 8H16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="text-left md:text-center">
            <h2 className="font-display text-base md:text-lg text-text-primary uppercase">
              Repetidas
            </h2>
            <p className="text-text-muted text-sm mt-0.5">
              {totalExtras} disponíveis para troca
            </p>
          </div>
        </Link>
      </main>
    </div>
  );
}

export default ModeSelect;
