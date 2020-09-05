import React from "react";
import { useTranslation } from 'react-i18next';

import { TNote, TItemComponent } from "./types";

const Item = ({ items, removeNote, updateNote }: TItemComponent) => {
  const [visible, setVisible] = React.useState(false);
  const [id, setId] = React.useState<number>();
  const [text, setText] = React.useState<string>();
  const [description, setDescription] = React.useState<string>();

  const { t } = useTranslation();

  const handleEdit = ({ id, text, description }: TNote) => {
    setId(id);
    setText(text);
    setDescription(description);
    setVisible(true);
  };

  const handleSave = () => {
    updateNote({ id, text, description });
    setVisible(false);
  };

  // TODO type fix
  return (
    <div>
      {items.map((item: any) => {
        return (
          <div key={item.id}>
            <p>
              {item.id}: {item.text} - {item.description}
            </p>
        <button onClick={() => handleEdit(item)}>{t('EDIT')}</button>
        <button onClick={() => removeNote(item.id)}>{t('DELETE')}</button>
          </div>
        );
      })}
      {visible && (
        <div>
          <br />
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={() => setVisible(false)}>{t('CANCEL')}</button>
      <button onClick={() => handleSave()}>{t('SAVE')}</button>
        </div>
      )}
    </div>
  );
};

export default Item;
