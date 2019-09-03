import React from "react";
import PropTypes from "prop-types";
import users from "../../data/users";
import styles from "./ListFilter.module.scss";

class ListFilter extends React.Component {
  render() {
    const { filterlist, onchangeFn, value, children, ...props } = this.props;
    return (
      <>
        <label className={styles.label}>
          <span className={styles.labelText}>{children}</span>
          <select
            onChange={onchangeFn}
            value={value}
            {...props}
            className={styles.select}
          >
            <option value="all">all</option>
            {users.map(user => {
              return (
                <option value={user} key={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </label>
      </>
    );
  }
}

ListFilter.propTypes = {
  onchangeFn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default ListFilter;
