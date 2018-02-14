'use strict';
(function(){
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;
	const User = new Schema({
		name: String,
		email: {type: String, unique: true, required: [true, 'This Email Already Exist']},
		password: String
	})
	module.exports = mongoose.model('Users', User)
})();