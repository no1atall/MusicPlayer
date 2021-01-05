import React from "react";

const SongLibrary = ({
  song,
  songs,
  audioRef,
  id,
  setCurrentSong,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    const selectedSong = song;
    setCurrentSong(selectedSong);
    //Change Active in state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //Check if the Song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt="Album Cover" src={song.cover}></img>
      <div className="song-descrpition">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default SongLibrary;
