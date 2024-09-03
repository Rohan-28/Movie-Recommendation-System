// File to create Routes for your App
const body_parser = require('body-parser');
const express = require('express');
const userRouter = require('./routes/user.routes');

const app = express(); //create instance

app.use(body_parser.json());

app.use('/', userRouter);

module.exports = app; // Use to call the app in all files in project
