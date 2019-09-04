import React from "react";
import PropTypes from "prop-types";
import users from "../../data/users";
import styles from "./Select.module.scss";

class Select extends React.Component {
  render() {
    const { onchangeFn, value, children, ...props } = this.props;
    const moveTop = [styles.moveTop, styles.placeholder].join(" ");
    return (
      <>
        <label className={styles.label}>
          <select
            onChange={onchangeFn}
            value={value}
            {...props}
            className={styles.select}
          >
            <option disabled={value ? true : null}></option>
            {users.map(user => {
              return (
                <option value={user} key={user}>
                  {user}
                </option>
              );
            })}
          </select>
          <span className={value ? moveTop : styles.placeholder}>
            {children}
          </span>
        </label>
      </>
    );
  }
}

Select.propTypes = {
  onchangeFn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Select;
