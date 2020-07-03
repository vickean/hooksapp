import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = (props) => {
  const initialSongs = [
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ];

  const [age, setAge] = useState(20);

  const [songs, setSongs] = useState(initialSongs);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
