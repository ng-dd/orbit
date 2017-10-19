const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config()
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const routes = require('./routes/routes');
const db = require('./db');

const port = process.env.PORT || 4200;
const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/', routes);

app.listen(port, ()=>{
  console.log('listening on port: ' + port);
})