"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AppAxios = require("@/utils/AppAxios.js");

var _default = {
  namespaced: true,
  state: {
    questions: []
  },
  mutations: {
    getQuestions: function getQuestions(state, responseQuestions) {
      state.questions = responseQuestions;
    }
  },
  actions: {
    getQuestions: function getQuestions(_ref) {
      var commit = _ref.commit;

      _AppAxios.appAxios.get('/questions').then(function (response) {
        commit('getQuestions', response.data || []);
      });
    }
  },
  getters: {
    _questionList: function _questionList(state) {
      return state.questions;
    }
  }
};
exports["default"] = _default;