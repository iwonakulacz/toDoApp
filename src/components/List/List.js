import React from "react";

const List = ({ items, removeTask, handleCheck }) => (
  <>
    {items.length ? (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input type="checkbox" onChange={() => handleCheck(item)} checked={item.checked}/>
            <span>
              {item.content}, {item.user}
            </span>
            <span onClick={() => removeTask(item)}>X</span>
          </li>
        ))}
      </ul>
    ) : (
      <h1>There's nothing here yet, please add some items!</h1>
    )}
  </>
);

export default List;
