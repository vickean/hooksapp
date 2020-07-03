import React, { useState } from "react";

const NewSongForm = (props) => {
  const { addSong } = props;
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        required
        value={title}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
