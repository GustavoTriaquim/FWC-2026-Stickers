import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ModeSelect from "./pages/ModeSelect";
import MainMenu from "./pages/MainMenu";
import SpecialStickers from "./pages/SpecialStickers";
import TeamStickers from "./pages/TeamStickers";
import NotFound from "./pages/NotFound";
import RequireValidMode from "./components/RequireValidMode";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ModeSelect />} />
        <Route
          path="/:mode"
          element={
            <RequireValidMode>
              <MainMenu />
            </RequireValidMode>
          }
        />
        <Route
          path="/:mode/fwc"
          element={
            <RequireValidMode>
              <SpecialStickers />
            </RequireValidMode>
          }
        />
        <Route
          path="/:mode/time/:teamId"
          element={
            <RequireValidMode>
              <TeamStickers />
            </RequireValidMode>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
