import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllSongs } from "./components/AllSongs";
import { MusicPlayer } from "./components/MusicPlayer";
import { Playlists } from "./components/Playlists";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>Music Player</h1>
          <p>The best way to enjoy your music</p>
        </header>
        <main className="app-main">
          <div className="music-player">
            <MusicPlayer />
          </div>
          <div className="content-section">
            <Routes>
              <Route path="/" element={<AllSongs />} />
              <Route path="/playlists" element={<Playlists />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
