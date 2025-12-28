import { useMusic } from "../hooks/useMusic";

export const AllSongs = () => {
  const { allSongs, handlePlaySong, currentTrackIndex } = useMusic();
  return (
    <div className="all-songs">
      <h2>All Songs ({allSongs.length})</h2>
      <div className="songs-grid">
        {allSongs.map((song, key) => (
          <div
            key={key}
            className={`song-card ${currentTrackIndex === key ? "active" : ""}`}
            onClick={() => handlePlaySong(song, key)}
          >
            <div className="song-number">{key + 1}</div>
            <div className="song-info">
              <h3 className="song-title">{song.title}</h3>
              <p className="song-artist">{song.artist}</p>
            </div>
            <span className="song-duration">{song.duration}</span>

            <div
              className="play-button"
              onClick={(e) => {
                e.stopPropagation();
                handlePlaySong(song, key);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handlePlaySong(song, key);
                }
              }}
              aria-label={currentTrackIndex === key ? "Pause" : "Play"}
            >
              {currentTrackIndex === key ? "♪" : "▶"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
