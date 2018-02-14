'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./db/db_connection');
const morganLogger = require('./morganLogger/logger')(app);
const routes = require('./routes/index')(app);


app.use(express.static('public'));


app.listen(port, ()=>{
	console.log(`App listen Port @ ${port}`);
})