import React, { useState } from "react";
import { v1 as uuid } from "uuid";

const SongList = (props) => {
  const initialSongs = [
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ];

  const [songs, setSongs] = useState(initialSongs);

  const addSong = () => {
    setSongs([...songs, { title: "new song", id: uuid() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
