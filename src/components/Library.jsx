import React from "react";
import SongLibrary from "./SongLibrary";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <SongLibrary song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
