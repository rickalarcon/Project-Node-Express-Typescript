"use strict";
exports.__esModule = true;
var express_1 = require("express");
var todos_1 = require("../controllers/todos");
var router = express_1.Router(); //allow us to register middleware ; routes end-point for incomming requests
router.post('/', todos_1.createTodo);
router.get('/', todos_1.getTodos);
router.patch('/:id', todos_1.updateTodo); //to update a todo
router["delete"]('/:id', todos_1.deleteTodo);
exports["default"] = router;
