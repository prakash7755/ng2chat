'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const db = require('./db/db_connection');
const morganLogger = require('./morganLogger/logger')(app);


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
});






app.use(express.static('public'));

app.use(cors());


const routes = require('./routes/index')(app);

app.listen(port, ()=>{
	console.log(`App listen Port @ ${port}`);
})