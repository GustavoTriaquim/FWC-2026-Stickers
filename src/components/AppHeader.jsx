import { useNavigate } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import ThemeToggle from "./ThemeToggle";

// showBack: controla se o botão "Voltar" aparece (default: true)
function AppHeader({ showBack = true }) {
  const navigate = useNavigate();

  return (
    <header className="pt-6 pb-2 px-4 flex items-center justify-between gap-3">
      {showBack ? (
        <button
          onClick={() => navigate(-1)}
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
        </button>
      ) : (
        <span />
      )}

      <div className="flex items-center gap-2">
        <ModeToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default AppHeader;
