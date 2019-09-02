import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, name, onChangeFn, type, ...props }) => (
  <input
    type={type}
    value={value}
    name={name}
    onChange={onChangeFn}
    {...props}
  />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChangeFn: PropTypes.func,
  type: PropTypes.string
};
Input.defaultProps = {
  type: "text"
};

export default Input;
