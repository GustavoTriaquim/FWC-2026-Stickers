import { Link, useParams } from "react-router-dom";
import GroupCarousel from "../components/GroupCarousel";
import AppHeader from "../components/AppHeader";
import ProgressBar from "../components/ProgressBar";
import { useAlbum } from "../context/Album/AlbumContext";
import { specialStickers } from "../data/specials";
import PageTransition from "../components/PageTransition";
import SearchBar from "../components/SearchBar";

function MainMenu() {
  const { mode } = useParams();
  const { countOwned, countExtras, getAlbumStats } = useAlbum();

  const isRepetidas = mode === "repetidas";
  const fwcOwned = countOwned(specialStickers);
  const fwcExtras = countExtras(specialStickers);
  const { owned: albumOwned, total: albumTotal } = getAlbumStats();

  return (
    <PageTransition>
      <div className="min-h-screen bg-bg-base flex flex-col">
        <AppHeader />

        <div className="mt-2">
          <SearchBar />
        </div>

        {/* Card FWC — faixa horizontal no topo */}
        <div className="px-4 mt-2 max-w-3xl w-full mx-auto">
          <Link
            to={`/${mode}/fwc`}
            className="group flex items-center gap-4 rounded-2xl bg-bg-card border border-border-subtle
                     hover:bg-bg-elevated hover:border-fifa-gold/40
                     transition-colors duration-200 px-5 py-4"
          >
            <svg
              className="w-9 h-9 text-fifa-gold shrink-0"
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
            <div className="flex-1 min-w-0">
              <h2 className="font-display text-base text-text-primary uppercase">
                FWC
              </h2>
              {isRepetidas ? (
                <p className="font-mono text-fifa-gold text-xs mt-0.5">
                  {fwcExtras} repetida{fwcExtras !== 1 ? "s" : ""}
                </p>
              ) : (
                <div className="mt-1.5">
                  <ProgressBar
                    value={fwcOwned}
                    total={specialStickers.length}
                    color="var(--color-fifa-gold)"
                    height="h-1"
                    showPercent={false}
                  />
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Carrossel de seleções */}
        <main className="flex-1 flex flex-col mt-4">
          <h3 className="font-mono text-text-muted text-xs tracking-widest px-4 mb-1 max-w-3xl w-full mx-auto">
            SELEÇÕES
          </h3>
          <GroupCarousel mode={mode} />
        </main>

        {/* Barra de progresso total do álbum, abaixo do carrossel, em ambos os modos */}
        <footer className="px-4 pb-6 max-w-3xl w-full mx-auto">
          <ProgressBar
            value={albumOwned}
            total={albumTotal}
            color="var(--color-fifa-blue)"
          />
          <p className="font-mono text-text-muted text-xs mt-1.5 text-center">
            {albumOwned}/{albumTotal} figurinhas no álbum
          </p>
        </footer>
      </div>
    </PageTransition>
  );
}

export default MainMenu;
