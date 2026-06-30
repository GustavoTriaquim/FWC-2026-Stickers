import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-bg-base flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-border-subtle bg-bg-slot flex items-center justify-center">
          <span className="font-mono text-text-dim text-2xl">?</span>
        </div>

        <div className="text-center">
          <h1 className="font-display text-2xl text-text-primary uppercase tracking-tight">
            Figurinha não Encontrada
          </h1>
          <p className="text-text-muted text-sm mt-2">
            Essa página não existe no álbum.
          </p>
        </div>

        <Link
          to="/"
          className="font-mono text-sm uppercase tracking-widest px-5 py-2.5 rounded-full bg-fifa-blue text-white hover:opacity-90 transition-opacity"
        >
          Voltar ao início
        </Link>
      </div>
    </PageTransition>
  );
}

export default NotFound;
