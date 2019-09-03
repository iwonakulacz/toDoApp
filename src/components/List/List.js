import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import styles from "./List.module.scss";

class List extends React.Component {
  render() {
    const { items, selectedUser } = this.props;
    const filteredItems = items.filter(item => {
      return selectedUser === "all" ? item : item.user === selectedUser;
    });
    return (
      <>
        {filteredItems.length ? (
          <ul className={styles.list}>
            {filteredItems.map(item => (
              <ListItem key={item.id} item={item}></ListItem>
            ))}
          </ul>
        ) : (
          <p className={styles.noItems}>Currently there are no tasks here.</p>
        )}
      </>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selectedUser: PropTypes.string.isRequired
};
export default List;
