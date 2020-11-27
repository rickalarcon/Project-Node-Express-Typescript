"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = express_1.Router(); //allow us to register middleware ; routes end-point for incomming requests
router.post('/', todos_1.createTodo);
router.get('/', todos_1.getTodos);
router.patch('/:id', todos_1.updateTodo); //to update a todo
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
