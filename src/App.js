import "./App.css";

function App() {
  return (
    <div className="main-note">
      <h1>Notes</h1>
      <input
        type="header"
        className="note-header"
        placeholder="Enter note's title"
      />
      <textarea
        className="note-text"
        placeholder="Enter your note here"
      ></textarea>
      <div className="note-buttons">
        <button className="note-delete-button">Delete </button>
        <button className="note-add-button">Add</button>
      </div>
    </div>
  );
}

export default App;
