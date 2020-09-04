import React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.scss";

import { addNote } from "./action";
import Item from "./Item";

type TNote = {
  id: Number;
  text: String;
  description?: String;
};

type TApp = {
  notes: Object[];
  addNote: ({id, text, description}: TNote) => Object;
};

const App = ({ notes, addNote }: TApp) => {
  const [text, setInput] = React.useState("");
  const [description, setDescription] = React.useState("");

  const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleAddButton = () => {
    let id = getRandomIntInclusive(10000, 99999);
    addNote({id, text, description});
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
          <Item items={notes} />
        </div>
      </div>
      <div className="App__preview">Pick the note for preview</div>
    </div>
  );
};

const mapStateToProps = (state: Record<string, any>) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      addNote,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
