"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _questions = _interopRequireDefault(require("@/store/modules/questions.js"));

var _categories = _interopRequireDefault(require("@/store/modules/categories.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  modules: {
    questions: _questions["default"],
    categories: _categories["default"]
  },
  state: {},
  mutations: {},
  actions: {
    initApp: function initApp(_ref) {
      var dispatch = _ref.dispatch;
      dispatch('categories/getCategories');
    }
  }
});

exports["default"] = _default;