import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import styles from "./List.module.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FlipMove from "react-flip-move";

class List extends React.Component {
  render() {
    const { items, selectedUser } = this.props;
    const filteredItems = items.filter(item => {
      return selectedUser === "all" ? item : item.user === selectedUser;
    });
    const itemsLeft = filteredItems.filter(item => item.checked !== true)
      .length;
    return (
      <>
        {filteredItems.length ? (
          <>
            <ul className={styles.list}>
              <span className={styles.tasksLeft}>
                {itemsLeft} {itemsLeft === 1 ? "task" : "tasks"} left
              </span>
              <TransitionGroup className="list-container">
                <FlipMove>
                  {filteredItems
                    .sort((a, b) => {
                      return b.id - a.id;
                    })
                    .sort((a, b) => {
                      return a.checked - b.checked;
                    })
                    .map(item => (
                      <CSSTransition
                        key={item.id}
                        classNames="pop"
                        timeout={300}
                        appear={true}
                      >
                        <ListItem key={item.id} item={item}></ListItem>
                      </CSSTransition>
                    ))}
                </FlipMove>
              </TransitionGroup>
            </ul>
          </>
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
