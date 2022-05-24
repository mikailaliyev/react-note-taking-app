import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const handleClick = () => {
    if (!text) {
      return;
    }
    localStorage.setItem(new Date().toUTCString(), text);
    setText("");
  };
  return (
    <div className="main-note">
      <h1>Notes</h1>
      <h2>{localStorage.getItem("Tue, 24 May 2022 19:42:26 GMT")}</h2>
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
