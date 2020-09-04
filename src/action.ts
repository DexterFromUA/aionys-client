type TNote = {
  id: Number;
  text: String;
  description?: String;
};

export const getNotes = () => {
    // fetch here
}

export const getNoteById = (id: Number) => {
    // later
}

export const addNote = ({ id, text, description }: TNote) => {
  return {
    type: "ADD_NOTE",
    payload: {
      id,
      text,
      description,
    },
  };
};
// TODO вынести типы в отдельный файл

export const updateNote = ({ id, text, description }: TNote) => {
  return {
    type: "UPDATE_NOTE",
    payload: {
      id: id,
      text: text,
      description: description,
    },
  };
};

export const removeNote = (id: Number) => {
  return {
    type: "REMOVE_NOTE",
    payload: id,
  };
};
