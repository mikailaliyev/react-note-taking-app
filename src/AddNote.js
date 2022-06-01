import { useState } from "react";

const AddNote = () => {
    const [text, setText] = useState("");
    const [header, setHeader] = useState("");
    const items = Object.keys({ ...localStorage });
  
    const handleClick = () => {
      if (!text) {
        return;
      }
      localStorage.setItem(header, text);
      setText("");
      setHeader("");
    };
    return ( 
        <div>
              <div>
        {" "}
        {items.map((i) => (
          <p key={i}>{i}</p>
        ))}
      </div>
      <div className="main-note">
        <h1>Notes</h1>

        <input
          autoFocus
          value={header}
          type="text"
          className="note-header"
          placeholder="Enter note's title"
          onChange={(e) => setHeader(e.target.value)}
        />
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
        </div>
     );
}
 
export default AddNote;