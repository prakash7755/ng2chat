'use strict';
(function() {
	const jwt = require('jsonwebtoken');
	const tokenSecret = 'my Secret';
	const expiresIn = '1h';

	function generatToken(data){
     const token = jwt.sign({data}, tokenSecret, {expiresIn})
     return token
	};

	function verifyToken(token){
     return jwt.verify(token, tokenSecret)
	};

	module.exports = { generatToken, verifyToken };
})();