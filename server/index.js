//const express = require('express');  (old version)

import express from 'express';

import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


//initializing express as a function
const app = express(); 

dotenv.config();
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use('/',Routes);



const PORT = 8002;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



Connection(username , password);

app.listen(PORT , () => console.log(`server is running successfully in port number ${PORT}`));