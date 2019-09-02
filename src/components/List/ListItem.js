import React from "react";
import Input from "../Input/Input";

const ListItem = ({item, handleCheckFn, handleRemoveFn}) => (
  <li key={item.id}>
    <Input
      type="checkbox"
      onChangeFn={handleCheckFn}
      checked={item.checked}
    ></Input>
    <span>
      {item.content}, {item.user}
    </span>
    <span onClick={handleRemoveFn}>X</span>
  </li>
);

export default ListItem;
