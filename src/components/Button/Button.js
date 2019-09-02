import React from "react";

const Button = ({children, ...props}) => (
    <button type={props.type}>{children}</button>
);

export default Button;
