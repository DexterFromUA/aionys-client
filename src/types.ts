export type TNote = {
  id: number | undefined;
  text: string | undefined;
  description?: string | undefined;
};

export type TItemComponent = {
  items: Object[];
  removeNote: (id: Number) => void;
  updateNote: ({ id, text, description }: TNote) => Object;
};

export type TAppComponent = {
  notes: Object[];
  addNote: ({ id, text, description }: TNote) => Object;
  getNotes: () => Object;
  removeNote: (id: Number) => Object;
  updateNote: ({id, text, description}: TNote) => Object;
};