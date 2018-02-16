'use strict';

(function() {
    const UserChat = require('../db/chat_app');
    const express = require('express');
    const router = express.Router();

        router.route('/user')
        
        /*
         *  User Will Get All Messages
         */
            .get((req, res, next) => {
            	UserChat.find()
            	.then((doc) => res.json(doc))
            	.catch(next)
            })

        /*
         * User Will Send Messages
         */

            .post((req, res, next) => {
            	const { msg, status } = req.body || {};
            	const userChat = new UserChat({ msg, status});
            	userChat.save((err,doc) => {
            		if (err) {
            			return res.status(404).json({msg: 'User Not Chated'})
            		}

            		res.json({msg: 'Success', data: doc})
            	}) 
            })



        /*
         * Error Heandling 
         */

            router.use((error, res, req, next) => {
            	const { message } = error || {};
            	const isSuccess = false;
            	res.json({message, isSuccess})
            })

    module.exports = router;
})();