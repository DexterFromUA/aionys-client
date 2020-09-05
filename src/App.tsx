import React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.scss";

import {
  addNote,
  getNotes,
  removeNote,
  updateNote,
  getNoteById,
} from "./action";
import Item from "./Item";
// eslint-disable-next-line
import { TNote, TAppComponent } from "./types";

// TODO Fix das fucking type
const App = ({
  notes,
  addNote,
  getNotes,
  removeNote,
  updateNote,
  getNoteById,
  selected,
}: any) => {
  React.useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const [text, setInput] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [search, setSearch] = React.useState();

  const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleAddButton = () => {
    let id = getRandomIntInclusive(10000, 99999);
    addNote({ id, text, description });
    setInput("");
    setDescription("");
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleAddButton();
    }
  };

  return (
    <div className="App">
      <div className="App__left">
        <h1>Add new note:</h1>
        <div className="App__create">
          <input
            type="text"
            value={text}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <button title="add" onClick={handleAddButton}>
            Add note
          </button>
        </div>
        <div className="App__list">
          <Item items={notes} removeNote={removeNote} updateNote={updateNote} />
        </div>
      </div>
      <div className="App__preview">
        <h1>Search by ID:</h1>
        <div>
          <input
            type="number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => getNoteById(search)}>search</button>
        </div>
        {(selected.text !== undefined || selected.description !== undefined) && <div>
          <text>TEXT: {selected.text}</text>
          <text>DESCRIPTION: {selected.description}</text>
        </div>}
      </div>
    </div>
  );
};

const mapStateToProps = (state: Record<string, any>) => {
  return {
    notes: state.notes,
    selected: state.selected,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      addNote,
      getNotes,
      removeNote,
      updateNote,
      getNoteById,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
