import { useState, useCallback } from "react";
import { useAlbum } from "../context/Album/AlbumContext";
import { buildExportText } from "../utils/exportList";

function ExportButton() {
  const { counts, isLoading } = useAlbum();
  const [copyState, setCopyState] = useState("idle"); // "idle" | "copied" | "error"

  const handdleExport = useCallback(async () => {
    if (!counts) return;

    const text = buildExportText(counts);

    try {
      await navigator.clipboard.writeText(text);
      setCopyState("copied");
    } catch (err) {
      setCopyState("error");
    }

    setTimeout(() => setCopyState("idle"), 2000);
  }, [counts]);

  if (isLoading) return null;

  return (
    <button
      onClick={handdleExport}
      className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 rounded-xl bg-bg-card border border-border-subtle hover:bg-bg-elevated transition-colors px-5 py-3 text-sm font-mono"
    >
      {copyState === "copied" ? (
        <>
          <svg
            className="w-4 h-4 text-fifa-green"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M20 6L9 17l-5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-fifa-green">Copiado!</span>
        </>
      ) : copyState === "error" ? (
        <span className="text-fifa-red">Não foi possível copiar</span>
      ) : (
        <>
          <svg
            className="w-4 h-4 text-text-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-text-primary">
            Exportar lista de figurinhas
          </span>
        </>
      )}
    </button>
  );
}

export default ExportButton;
