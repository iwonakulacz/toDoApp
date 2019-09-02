import React from "react";

const Input = ({ value, name, onChangeFn, type='text', ...props }) => (
  <input
    type={type}
    value={value}
    name={name}
    onChange={onChangeFn}
    {...props}
  />
);

export default Input;
