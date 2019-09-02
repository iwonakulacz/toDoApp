import React from "react";
import PropTypes from "prop-types";
import users from "../../data/users";

const Select = ({ onchangeFn, value, ...props }) => (
  <select onChange={onchangeFn} value={value} {...props}>
    {props.filterlist ? <option value="all">all</option> : null}
    {users.map(user => {
      return <option value={user}>{user}</option>;
    })}
  </select>
);
Select.propTypes = {
  onchangeFn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Select;
