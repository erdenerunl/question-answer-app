"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appAxios = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appAxios = _axios["default"].create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json"
  }
});

exports.appAxios = appAxios;