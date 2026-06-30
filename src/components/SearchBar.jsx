import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchAlbum } from "../utils/search";

function SearchBar() {
  const { mode } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const results = searchAlbum(query);

  // Fecha o dropdown ao clicar fora do componente
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (entry) => {
    const destination =
      entry.type === "fwc" ? `/${mode}/fwc` : `/${mode}/time/${entry.id}`;
    navigate(destination);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto px-4">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Buscar por seleção, código ou número..."
          className="w-full bg-bg-card border border-border-subtle rounded-xl
                     pl-9 pr-3 py-2.5 text-sm text-text-primary placeholder:text-text-dim
                     focus:outline-none focus:border-fifa-green/50 transition-colors"
        />
      </div>

      {/* Dropdown de resultados */}
      {isOpen && query.trim() && (
        <div className="absolute top-full left-4 right-4 mt-1.5 bg-bg-card border border-border-subtle rounded-xl overflow-hidden z-10 max-h-72 overflow-y-auto shadow-lg">
          {results.length === 0 ? (
            <p className="text-text-muted text-sm px-4 py-3">
              Nenhum resultado encontrado.
            </p>
          ) : (
            results.map((entry) => (
              <button
                key={entry.id}
                onClick={() => handleSelect(entry)}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-bg-elevated transition-colors text-left"
              >
                <span className="text-xl leading-none">{entry.flag}</span>
                <div className="min-w-0">
                  <p className="text-text-primary text-sm font-medium truncate">
                    {entry.name}
                  </p>
                  <p className="font-mono text-text-dim text-xs">
                    {entry.reason}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
