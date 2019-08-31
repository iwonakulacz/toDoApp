import React from "react";

const List = ({ items, removeTask, handleCheck }) => (
  <>
    {items.length ? (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item)} />
            <span>{item.content}, {item.user}</span>
            <span onClick={() => removeTask(item.id)}>X</span>
          </li>
        ))}
      </ul>
    ) : (
      <h1>
        There's nothing here yet, please add some items!
      </h1>
    )}
  </>
);

export default List;