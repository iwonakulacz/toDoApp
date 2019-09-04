import React from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import AppContext from "../../context";
import styles from "./ListItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ item }) => (
  <AppContext.Consumer>
    {context => (
      <li className={styles.listItem}>
        <Input
          key={item.key}
          type="checkbox"
          checked={item.checked}
          onChangeFn={() => context.handleCheck(item)}
        ></Input>
          <p className={item.checked ? [styles.content, styles.checked].join(' ') : styles.content}>
            {item.content}
          </p>
        <div className={styles.rightItems}>
          {context.selectedUser === "all" ? (
            <span className={styles.user}>{item.user}</span>
          ) : null}
          <button
            className={styles.trash}
            onClickFn={() => context.removeTask(item)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </li>
    )}
  </AppContext.Consumer>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};
export default ListItem;
