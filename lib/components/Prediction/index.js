"use strict"

exports.__esModule = true

var _templateObject = _taggedTemplateLiteralLoose(
  ["\n  font-weight: bold;\n"],
  ["\n  font-weight: bold;\n"]
)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _styledComponents = require("styled-components")

var _styledComponents2 = _interopRequireDefault(_styledComponents)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

var Match = _styledComponents2.default.span(_templateObject)

var Prediction = function Prediction(_ref) {
  var item = _ref.item
  var description = item.description,
    matched_substrings = item.matched_substrings

  var firstMatchedString =
    matched_substrings &&
    matched_substrings.length > 0 &&
    matched_substrings.shift()
  var labelParts = null

  if (firstMatchedString) {
    labelParts = {
      before: description.substr(0, firstMatchedString.offset),
      match: description.substr(
        firstMatchedString.offset,
        firstMatchedString.length
      ),
      after: description.substr(
        firstMatchedString.offset + firstMatchedString.length
      ),
    }
  }

  return _react2.default.createElement(
    "div",
    null,
    labelParts
      ? _react2.default.createElement(
          "span",
          null,
          labelParts.before,
          _react2.default.createElement(Match, null, labelParts.match),
          labelParts.after
        )
      : description
  )
}

Prediction.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        item: _propTypes2.default.shape({
          description: _propTypes2.default.string,
          matched_substrings: _propTypes2.default.arrayOf(
            _propTypes2.default.shape({
              length: _propTypes2.default.number.isRequired,
              offset: _propTypes2.default.number.isRequired,
            })
          ),
        }).isRequired,
      }
    : {}

exports.default = Prediction
module.exports = exports["default"]
