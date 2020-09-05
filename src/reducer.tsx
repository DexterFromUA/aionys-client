import { AnyAction } from "redux";

import { TNote } from "./types";

export default (state: any, action: AnyAction) => {
  switch (action.type) {
    case "LOAD_NOTES":
      return Object.assign({}, state, {
        notes: action.payload,
      });

    case "ADD_NOTE":
      return Object.assign({}, state, {
        notes: [action.payload, ...state.notes],
      });

    case "REMOVE_NOTE":
      return Object.assign({}, state, {
        notes: state.notes.filter(({ id }: TNote) => id !== action.payload),
      });

    case "UPDATE_NOTE":
      return Object.assign({}, state, {
        notes: state.notes.map(({ id, text, description }: TNote) =>
          id === action.payload.id
            ? {
                id: action.payload.id,
                text: action.payload.text,
                description: action.payload.description,
              }
            : { id, text, description }
        ),
      });

    case "GET_NOTE":
      return Object.assign({}, state, {
        selected: action.payload,
      });

    default:
      return state;
  }
};
