"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _breadcrumb = require("@quilt/breadcrumb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Row = () => {
  return _react.default.createElement(_breadcrumb.Breadcrumb, {
    separator: ">",
    separatorColour: "#FFA500"
  }, "root", _react.default.createElement("a", null, "category 1"), _react.default.createElement("a", null, "category 2"), _react.default.createElement("div", null, "category 3"), _react.default.createElement("p", null, "category 4"), _react.default.createElement("p", null, "category 5"));
};

exports.Row = Row;
//# sourceMappingURL=row.js.map