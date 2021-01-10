"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _questions = _interopRequireDefault(require("@/store/modules/questions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _vuex.createStore)(_defineProperty({
  modules: {
    questions: _questions["default"]
  },
  state: {},
  mutations: {},
  actions: {}
}, "modules", {}));

exports["default"] = _default;