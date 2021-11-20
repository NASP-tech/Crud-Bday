"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _bdays = require("../controllers/bdays.controller");

var router = (0, _express.Router)();
router.get("/", _bdays.renderTasks);
router.post("/tasks/add", _bdays.createTask);
router.get("/bdays/:id/toggleDone", _bdays.bdayToggleDone);
router.get("/bdays/:id/edit", _bdays.renderBdayEdit);
router.post("/bdays/:id/edit", _bdays.editBday);
router.get("/bdays/:id/delete", _bdays.deleteBday);
var _default = router;
exports["default"] = _default;