import React from "react";
import PropTypes from "prop-types";

const Button = ({children, type}) => (
    <button type={type}>{children}</button>
);

Button.propTypes = {
    type: PropTypes.string
}

export default Button;
