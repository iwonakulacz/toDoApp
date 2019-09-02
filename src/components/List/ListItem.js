import React from "react";
import PropTypes from 'prop-types';
import Input from "../Input/Input";
import AppContext from "../../context";

const ListItem = ({ item }) => (
  <AppContext.Consumer>
    {context => (
      <li>
        <Input
          type="checkbox"
          checked={item.checked}
          onChangeFn={() => context.handleCheck(item)}
        ></Input>
        <span>
          {item.content}, {item.user}
        </span>
        <span onClick={() => context.removeTask(item)}>X</span>
      </li>
    )}
  </AppContext.Consumer>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired
}
export default ListItem;
