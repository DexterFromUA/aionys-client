import { Dispatch } from "redux";

import { TNote } from "./types";

export const getNotes = () => {
  return (dispatch: Dispatch) => {
    fetch("http://localhost:8081/notes")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "LOAD_NOTES", payload: json }))
      .catch((e) => console.error(e));
  };
};

export const getNoteById = (id: Number) => {
  return (dispatch: Dispatch) => {
    fetch(`http://localhost:8081/note/${id}`)
    .then((res) => res.json())
    .then((json) => dispatch({ type: "GET_NOTE", payload: json }))
    .catch((e) => console.error(e));
  };
};

export const addNote = ({ id, text, description }: TNote) => {
  return (dispatch: Dispatch) => {
    fetch("http://localhost:8081/new", {
      method: "POST",
      body: JSON.stringify({
        id,
        text,
        description,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: "ADD_NOTE",
          payload: {
            id: json.id,
            text: json.text,
            description: json.description,
          },
        })
      )
      .catch((e) => console.error(e));
  };
};

export const updateNote = ({ id, text, description }: TNote) => {
  return (dispatch: Dispatch) => {
    fetch(`http://localhost:8081/note/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        text,
        description,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: "UPDATE_NOTE",
          payload: {
            id: json.id,
            text: json.text,
            description: json.description,
          },
        })
      )
      .catch((e) => console.error(e));
  };
};

export const removeNote = (id: Number) => {
  return (dispatch: Dispatch) => {
    fetch(`http://localhost:8081/note/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => dispatch({ type: "REMOVE_NOTE", payload: json.id }))
      .catch((e) => console.error(e));
  };
};
