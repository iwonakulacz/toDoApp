import React from "react";
import PropTypes from "prop-types";
import users from "../../data/users";
import styles from "./Select.module.scss";

const Select = ({ onchangeFn, value, children, ...props }) => (
  <>
    <label className={props.filterlist ? [styles.label, styles.filterLabel].join(' ') : styles.label}>
      <select
        onChange={onchangeFn}
        value={value}
        {...props}
        className={props.filterlist ? [styles.select, styles.filter].join(' ') : styles.select}
      >
        {props.filterlist ? <option value="all">all</option> : null}
        {users.map(user => {
          return (
            <option value={user} key={user}>
              {user}
            </option>
          );
        })}
      </select>
      <span className={styles.placeholder}>{children}</span>
    </label>
  </>
);
Select.propTypes = {
  onchangeFn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Select;
