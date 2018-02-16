'use strict';
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socketIo = require('./socket_io_connection/socket_io')(http);
const cors = require('cors');
const port = process.env.PORT || 8000;
app.use(cors());
const db = require('./db/db_connection');
const morganLogger = require('./morganLogger/logger')(app);





const routes = require('./routes')(app);




http.listen(port, () => {
  console.log(`App listen Port @ ${port}`);
})
