import React from "react";
import SongLibrary from "./SongLibrary";

const Library = ({ songs, audioRef, setCurrentSong, isPlaying, setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <SongLibrary
            song={song}
            songs={songs}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
            id={song.id}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
