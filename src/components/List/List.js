import React from "react";
import ListItem from "./ListItem";

const List = ({ items, removeTask, handleCheck, selectedUser }) => (
  <>
    {items.filter(item =>
      selectedUser === "all" ? item : item.user === selectedUser
    ).length ? (
      <ul>
        {items.map(item => {
          if (item.user === selectedUser || selectedUser === "all") {
            return (
              <ListItem
                item={item}
                handleCheckFn={() => handleCheck(item)}
                handleRemoveFn={() => removeTask(item)}
              ></ListItem>
            );
          } else {
            return null;
          }
        })}
      </ul>
    ) : (
      <h1>There's nothing to do!</h1>
    )}
  </>
);

export default List;
