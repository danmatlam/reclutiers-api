"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _CandidatesController = _interopRequireDefault(require("./controllers/CandidatesController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _express.Router();
router.post("/candidates/push", function (req, res) {
  _CandidatesController["default"].candidatesPush(req, res);
});
router.get("/", function (req, res) {
  res.status(200).json({
    mensaje: 'may the force be with you'
  });
});
var _default = router;
exports["default"] = _default;