import React from "react";
import ListItem from "./ListItem";
import PropTypes from 'prop-types';

const List = ({ items, selectedUser }) => (
  <>
    {items.filter(item =>
      selectedUser === "all" ? item : item.user === selectedUser
    ).length ? (
      <ul>
        {items.map(item => {
          if (item.user === selectedUser || selectedUser === "all") {
            return (
              <ListItem
                key={item.id}
                item={item}
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

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selectedUser: PropTypes.string.isRequired
}
export default List;
