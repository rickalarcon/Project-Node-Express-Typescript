/*
Builing a Rest API

In-line documentation
Express help us create a Web Server
app.use((req,res,next) =>{}); -> this is a regular express middleware function!
app.use((err,req,res,next) =>{});-> this is a ERROR handler middleware function; this will fire up if any middleware prior to it gets an error!!

Note: we installed type/node and type/express so typscript can undertand 
packages syntaxes
*/

//const express = require('express');
import express, {Request, Response, NextFunction} from 'express';
import {json} from 'body-parser'; //to parse body of all incoming requests
import todoRoutes from './routes/todos';
const app = express();

app.use(json()); //middleware that allow us to parse upcoming requests and extract ANY JSON Data we find in there!

app.use('/todos', todoRoutes); //connecting to our running express application

app.use((err: Error,req: Request, res:Response,next: NextFunction) => { 
res.status(500).json({message: err.message})     
});

app.listen(3000);

