import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";

const VALID_MODES = ["colecao", "repetidas"];

function RequireValidMode({ children }) {
  const { mode } = useParams();

  if (!VALID_MODES.includes(mode)) {
    return <NotFound />;
  }

  return children;
}

export default RequireValidMode;
