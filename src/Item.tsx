import React from "react";

type TItem = {
  items: Object[];
};

const Item = ({ items }: TItem) => {
  return (
    <div>
      {items.map((item: any) => {
        return (
          <div>
            <div onClick={() => alert("click")} key={item.id}>
              {item.id}: {item.text} - {item.description}
            </div>
            <button>edit</button>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Item;

// TODO type fix
