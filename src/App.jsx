import { BrowserRouter, Route, Routes } from "react-router";
import { AllSongs } from "./components/AllSongs";
import { MusicPlayer } from "./components/MusicPlayer";
import { Playlists } from "./components/Playlists";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar /> */}
        <main className="app-main">
          <div className="player-section">
            <MusicPlayer />
          </div>
          <div className="content-section"></div>
          <Routes>
            <Route path="/" element={<AllSongs />} />
            <Route path="/playlists" element={<Playlists />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
