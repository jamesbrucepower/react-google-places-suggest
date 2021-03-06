"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
  [
    "\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: 0 0.4rem 0.5rem 0.0625rem #dbdbdc;\n  z-index: 2;\n",
  ],
  [
    "\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: 0 0.4rem 0.5rem 0.0625rem #dbdbdc;\n  z-index: 2;\n",
  ]
)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _styledComponents = require("styled-components")

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _ListItem = require("../ListItem")

var _ListItem2 = _interopRequireDefault(_ListItem)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

var Wrapper = _styledComponents2.default.div(_templateObject)

var List = (function(_React$Component) {
  _inherits(List, _React$Component)

  function List() {
    _classCallCheck(this, List)

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments)
    )
  }

  List.prototype.renderDefault = function renderDefault() {
    var _props = this.props,
      customRender = _props.customRender,
      items = _props.items,
      activeItemIndex = _props.activeItemIndex,
      onSelect = _props.onSelect,
      textNoResults = _props.textNoResults

    if (items.length > 0) {
      return _react2.default.createElement(
        Wrapper,
        null,
        items.map(function(item, index) {
          return _react2.default.createElement(_ListItem2.default, {
            key: index,
            active: activeItemIndex === index,
            customRender: customRender,
            onClick: function onClick(item) {
              return onSelect(item)
            },
            item: item,
          })
        })
      )
    }

    if (textNoResults || customRender) {
      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(_ListItem2.default, {
          customRender: customRender,
          textNoResults: textNoResults,
        })
      )
    }

    return null
  }

  List.prototype.render = function render() {
    var _props2 = this.props,
      customContainerRender = _props2.customContainerRender,
      items = _props2.items

    return customContainerRender
      ? customContainerRender(this.props)
      : this.renderDefault(items)
  }

  return List
})(_react2.default.Component)

List.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        activeItemIndex: _propTypes2.default.number,
        items: _propTypes2.default.arrayOf(
          _propTypes2.default.shape({
            description: _propTypes2.default.string,
            matched_substrings: _propTypes2.default.arrayOf(
              _propTypes2.default.shape({
                length: _propTypes2.default.number.isRequired,
                offset: _propTypes2.default.number.isRequired,
              })
            ),
          })
        ),
        children: _propTypes2.default.oneOfType([
          _propTypes2.default.arrayOf(
            _propTypes2.default.instanceOf(_ListItem2.default)
          ),
          _propTypes2.default.instanceOf(_ListItem2.default),
        ]),
        onSelect: _propTypes2.default.func,
        customContainerRender: _propTypes2.default.func,
        customRender: _propTypes2.default.func,
        textNoResults: _propTypes2.default.string,
      }
    : {}

List.defaultProps = {
  items: [],
}

exports.default = List
module.exports = exports["default"]
