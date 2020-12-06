"use strict";
/*
Builing a Rest API

In-line documentation
Express help us create a Web Server
app.use((req,res,next) =>{}); -> this is a regular express middleware function!
app.use((err,req,res,next) =>{});-> this is a ERROR handler middleware function; this will fire up if any middleware prior to it gets an error!!

Note: we installed type/node and type/express so typscript can undertand
packages syntaxes
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require('express');
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/todos', todos_1.default); //connecting to our running express application
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
