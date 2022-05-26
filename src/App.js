import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [header, setHeader] = useState("");
<<<<<<< HEAD
=======
  const items = Object.keys({ ...localStorage });

>>>>>>> 794892d56c44beb10ffcd354737a223b5661cd2f
  const handleClick = () => {
    if (!text) {
      return;
    }
    localStorage.setItem(header, text);
    setText("");
    setHeader("");
  };
  return (
    <div className="main-note">
      <h1>Notes</h1>
<<<<<<< HEAD
      <input
      className="note-title"
        type="text"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
      />

=======
      {items.map((i) => (
        <p key={i}>{i}</p>
      ))}
      <input
        autoFocus
        value={header}
        type="text"
        className="note-header"
        placeholder="Enter note's title"
        onChange={(e) => setHeader(e.target.value)}
      />
>>>>>>> 794892d56c44beb10ffcd354737a223b5661cd2f
      <textarea
        value={text}
        className="note-text"
        placeholder="Enter note here"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="note-add-button" onClick={handleClick}>
        Add note
      </button>
    </div>
  );
}

export default App;
