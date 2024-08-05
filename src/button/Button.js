// src/CustomButton.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  label,
  onClick,
  style,
  disabled,
  className,
  type,
}) => (
  <button
    type={type}
    onClick={onClick}
    style={style}
    disabled={disabled}
    className={className}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
  disabled: false,
  className: '',
  type: 'button',
};

export default Button;
