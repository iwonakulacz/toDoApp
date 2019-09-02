import React from "react";
import PropTypes from 'prop-types';

const Select = ({onchangeFn, value, ...props}) => (
  <select onChange={onchangeFn} value={value} {...props}>
    {props.filterlist ? <option value="all">all</option> : null}
    <option value="anna">anna</option>
    <option value="tom">tom</option>
    <option value="mat">mat</option>
    <option value="jane">jane</option>
  </select>
);
Select.propTypes = {
  onchangeFn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Select;
