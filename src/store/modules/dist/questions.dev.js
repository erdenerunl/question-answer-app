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
    getQuestions: function getQuestions(_ref, selectedCategories) {
      var commit = _ref.commit;
      // category içindeki created_at e göre sırala (desc: azalarak)
      var url = "/questions?_expand=category&_sort=created_at&_order=desc";

      if (selectedCategories) {
        var IDs = selectedCategories.filter(function (s) {
          return s.selected;
        }).map(function (c) {
          return "categoryId".concat(c.id);
        }).join("&");
        url = "".concat(url, "&").concat(IDs);
      }

      _AppAxios.appAxios.get(url).then(function (response) {
        console.log(response.data);
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