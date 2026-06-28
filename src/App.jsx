import { Routes, Route } from "react-router-dom";
import ModeSelect from "./pages/ModeSelect";
import MainMenu from "./pages/MainMenu";
import SpecialStickers from "./pages/SpecialStickers";
import TeamStickers from "./pages/TeamStickers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModeSelect />} />
      <Route path="/:mode" element={<MainMenu />} />
      <Route path="/:mode/fwc" element={<SpecialStickers />} />
      <Route path="/:mode/time/:teamId" element={<TeamStickers />} />
    </Routes>
  );
}

export default App;
