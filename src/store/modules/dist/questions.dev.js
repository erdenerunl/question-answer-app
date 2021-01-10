"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  namespaced: true,
  state: {
    questions: []
  },
  getters: {
    _questionList: function _questionList(state) {
      return state.questions;
    }
  }
};
exports["default"] = _default;