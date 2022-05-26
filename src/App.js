import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [header, setHeader] = useState("");
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
      <input
      className="note-title"
        type="text"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
      />

      <textarea
        value={text}
        className="note-text"
        placeholder="Enter your note here"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="note-add-button" onClick={handleClick}>
        Add note
      </button>
    </div>
  );
}

export default App;
