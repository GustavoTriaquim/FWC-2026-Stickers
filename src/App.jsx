import { Routes, Route } from "react-router-dom";
import ModeSelect from "./pages/ModeSelect";
import MainMenu from "./pages/MainMenu";
import SpecialStickers from "./pages/SpecialStickers";
import TeamStickers from "./pages/TeamStickers";
import NotFound from "./pages/NotFound";
import RequireValidMode from "./components/RequireValidMode";

import { db } from "./firebase";

function App() {
  console.log("Firestore conectado:", db);

  return (
    <Routes>
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
  );
}

export default App;
