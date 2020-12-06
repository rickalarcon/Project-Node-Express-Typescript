"use strict";
/*
a tipycal middleware from express have request,res,etc

Intead of doing this we can use RequestHandle as a function type and Typescript
will automatically infer that our paramenters have that format! :D
*/
exports.__esModule = true;
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var TODOS = []; //to manage some todos in memory of course
var createTodo = function (req, res, next) {
    var text = req.body.text; //using type casting
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the code.', createdTodo: newTodo });
};
exports.createTodo = createTodo;
var getTodos = function (req, res, next) {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
//id:string is a generic type to help us know what value type id is..
var updateTodo = function (req, res, next) {
    var todoId = req.params.id;
    var updatedText = req.body.text;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error('Could not find todo!'); //this is trigger our default error handling middleware in app.ts
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
var deleteTodo = function (req, res, next) {
    var todoId = req.params.id;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted!' });
};
exports.deleteTodo = deleteTodo;
