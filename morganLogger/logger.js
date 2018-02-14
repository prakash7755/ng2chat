'use strict';
(function() {
	const morgan = require('morgan');
	const path = require('path');
	const fs = require('fs');
   function morganLogger(app){
	const loggerFile = fs.createWriteStream(path.join(__dirname, 'loggerFile'))
	app.use(morgan('dev', { stream: loggerFile}))
   }
    module.exports = morganLogger;
})();