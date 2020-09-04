import { AnyAction } from "redux";

export default (state: any, action: AnyAction) => {
  switch (action.type) {
    case "LOAD_NOTES":
      return state;

    case "ADD_NOTE":
      return Object.assign({}, state, {
        notes: [action.payload, ...state.notes]
      });

    default:
      return state;
  }
};
