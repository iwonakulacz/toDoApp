import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import AppContext from "../../context";
import styles from "./ListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ item }) => (
  <AppContext.Consumer>
    {context => (
      <li className={styles.listItem}>
        <Input
          type="checkbox"
          checked={item.checked}
          onChangeFn={() => context.handleCheck(item)}
        ></Input>
        <span className={item.checked ? styles.checked : null}></span>
        <p className={item.checked ? styles.contentChecked : styles.content}>{item.content}</p>
        <div className={styles.rightItems}>
          {context.selectedUser === "all" ? (
            <span className={styles.user}>{item.user}</span>
          ) : null}
          <span
            className={styles.trash}
            onClick={() => context.removeTask(item)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </li>
    )}
  </AppContext.Consumer>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};
export default ListItem;
