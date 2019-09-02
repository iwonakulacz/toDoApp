import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import styles from "./List.module.scss";

const List = ({ items, selectedUser }) => (
  <>
    {items.filter(item => {
      console.log(item.user);
      return selectedUser === "all" ? item : item.user === selectedUser;
    }).length ? (
      <ul className={styles.list}>
        {items.map(item => {
          if (item.user === selectedUser || selectedUser === "all") {
            return <ListItem key={item.id} item={item}></ListItem>;
          } else {
            return null;
          }
        })}
      </ul>
    ) : (
      <p className={styles.noItems}>Currently there are no tasks here.</p>
    )}
  </>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selectedUser: PropTypes.string.isRequired
};
export default List;
