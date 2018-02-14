'use strict';
(function(){
	const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/mean', (err)=>{
    	if (err) {
    		console.log('DB Not connected')
    	}
    	else{
    		console.log('DB connected Successfuly')
    	}
    })
})()