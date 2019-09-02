import React from "react";

const Select = ({onchangeFn, value, ...props}) => (
  <select onChange={onchangeFn} value={value} {...props}>
    {props.filterList ? <option value="all">all</option> : null}
    <option value="anna">anna</option>
    <option value="tom">tom</option>
    <option value="mat">mat</option>
    <option value="jane">jane</option>
  </select>
);

export default Select;
