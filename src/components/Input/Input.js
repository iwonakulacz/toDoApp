import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Input = ({ value, name, onChangeFn, type, children, ...props }) => (
  <>
    {type === "checkbox" ? (
      <>
        <label className={styles.label}>
          <input
            type={type}
            value={value}
            onChange={onChangeFn}
            {...props}
            className={styles.checkbox}
          />
          <span className={styles.checked}>
            {props.checked ? <FontAwesomeIcon icon={faCheck} className={styles.icon}/> : null}
          </span>
        </label>
      </>
    ) : (
      <label className={styles.label}>
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChangeFn}
          className={styles.input}
          placeholder=" "
          required
        />
        <span className={styles.placeholder}>{children}</span>
      </label>
    )}
  </>
);

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChangeFn: PropTypes.func,
  type: PropTypes.string
};
Input.defaultProps = {
  type: "text"
};

export default Input;
