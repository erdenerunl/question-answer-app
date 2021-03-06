"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AppAxios = require("@/utils/AppAxios.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    getCategories: function getCategories(state, category) {
      state.categories = category.map(function (c) {
        return _objectSpread({}, c, {
          selected: false
        });
      });
    }
  },
  actions: {
    getCategories: function getCategories(_ref) {
      var commit = _ref.commit;

      _AppAxios.appAxios.get("/categories").then(function (response) {
        commit('getCategories', response.data || []);
      });
    }
  },
  getters: {
    _categoryList: function _categoryList(state) {
      return state.categories;
    },
    selectedCategories: function selectedCategories(state) {
      return state.categories.filter(function (c) {
        return c.selected;
      });
    }
  }
};
exports["default"] = _default;