import "./App.css";
import { useState } from "react";
// import * as fs from 'fs';

function App() {
  const [text, setText] = useState("");
  // const fs = require("fs");
  // const addNote = () => {
  //   fs.writeFile("../db/db.json", "utf8");
  // };
  return (
    <div className="main-note">
      <h1>Notes</h1>
      <textarea
        value={text}
        className="note-text"
        placeholder="Enter your note here"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      {<button className="note-add-button"></button>}
    </div>
  );
}

export default App;
