/*
a tipycal middleware from express have request,res,etc

Intead of doing this we can use RequestHandle as a function type and Typescript
will automatically infer that our paramenters have that format! :D
*/


import {RequestHandler} from 'express';

import {Todo} from '../models/todo';
const TODOS: Todo[] =[]; //to manage some todos in memory of course
export const createTodo: RequestHandler = (req,res,next) =>{
	const text = (req.body as {text:string}).text; //using type casting
	const newTodo = new Todo(Math.random().toString(), text);

	TODOS.push(newTodo);


	res.status(201).json({message: 'Created the code.',createdTodo:newTodo});
};


export const getTodos: RequestHandler = (req,res, next) =>{

	res.json({todos: TODOS})
};
//id:string is a generic type to help us know what value type id is..
export const updateTodo: RequestHandler<{id:string}> = (req, res, next) =>{
	const todoId = req.params.id;

	const updatedText = (req.body as {text: string}).text;

	const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

	if(todoIndex <0){
		throw new Error('Could not find todo!') //this is trigger our default error handling middleware in app.ts
	}
	TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

	res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler = (req,res,next) =>{
	const todoId = req.params.id;

	const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

	if(todoIndex <0){
		throw new Error('Could not find todo!');
	}
	TODOS.splice(todoIndex, 1);

	res.json({message: 'Todo deleted!'});
}






