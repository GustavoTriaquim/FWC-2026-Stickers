import { useNavigate, useLocation, useParams } from "react-router-dom";
import { swapMode } from "../utils/url";

function ModeToggle() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const isRepetidas = mode === "repetidas";
  const modeLabel = isRepetidas ? "Repetidas" : "Coleção";
  const modeColor = isRepetidas ? "text-fifa-gold" : "text-fifa-green";

  const handleToggle = () => {
    const newMode = isRepetidas ? "colecao" : "repetidas";
    navigate(swapMode(location.pathname, newMode), { replace: true });
  };

  return (
    <button
      onClick={handleToggle}
      className={`font-mono text-xs tracking-widest uppercase px-3 py-1.5 rounded-full
                  bg-bg-card border border-border-subtle hover:bg-bg-elevated
                  transition-colors ${modeColor}`}
    >
      {modeLabel}
    </button>
  );
}

export default ModeToggle;
