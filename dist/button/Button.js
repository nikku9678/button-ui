"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/CustomButton.js

var Button = function Button(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick,
    style = _ref.style,
    disabled = _ref.disabled,
    className = _ref.className,
    type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: type,
    onClick: onClick,
    style: style,
    disabled: disabled,
    className: className
  }, label);
};
Button.propTypes = {
  label: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func,
  style: _propTypes["default"].object,
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['button', 'submit', 'reset'])
};
Button.defaultProps = {
  onClick: function onClick() {},
  style: {},
  disabled: false,
  className: '',
  type: 'button'
};
var _default = exports["default"] = Button;