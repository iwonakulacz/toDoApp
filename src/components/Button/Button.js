import React from "react";
import PropTypes from "prop-types";
import styles from './Button.module.scss';

const Button = ({children, type}) => (
    <button className={styles.button} type={type}>{children}</button>
);

Button.propTypes = {
    type: PropTypes.string
}

export default Button;
