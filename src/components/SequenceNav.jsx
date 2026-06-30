import { replace, useNavigate, useParams } from "react-router-dom";
import { getAdjacent, stepToPath } from "../utils/navigation";

function SequenceNav({ type, id }) {
  const { mode } = useParams();
  const navigate = useNavigate();
  const { prev, next } = getAdjacent(type, id);

  return (
    <div className="flex items-center justify-between px-4 max-w-3xl w-full mx-auto">
      <button
        onClick={() => navigate(stepToPath(mode, prev), { replace: true })}
        className="flex items-center gap-1.5 text-text-muted text-xs hover:text-text-primary transition-color py-2"
        aria-label={`Anterior: ${prev?.label}`}
      >
        <svg
          className="w-4 h-4 shrink-0"
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
        <span className="truncate max-w-25">{prev?.label}</span>
      </button>

      <button
        onClick={() => navigate(stepToPath(mode, next), { replace: true })}
        className="flex items-center gap-1.5 text-text-muted text-xs hover:text-text-primary transition-colors py-2"
        aria-label={`Próximo: ${next?.label}`}
      >
        <span className="truncate max-w-25">{next?.label}</span>
        <svg
          className="w-4 h-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M9 18l6-6-6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default SequenceNav;
