'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserChat = new  Schema({
	msg: String,
	status: String
})

module.exports = mongoose.model('UserChat', UserChat)