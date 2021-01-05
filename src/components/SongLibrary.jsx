import React from "react";

const SongLibrary = ({ song }) => {
  return (
    <div className="library-song">
      <img alt="Album Cover" src={song.cover}></img>
      <div className="song-descrpition">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default SongLibrary;
