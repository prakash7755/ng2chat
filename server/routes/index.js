'use strict';
(function() {
    const loginUser = require('./login_auth');
    const UserChats = require('./chat_app');
    const bodyParser = require('body-parser');
    const User = require('../db/schema.js');
    const TockenServ = require('../service/tocken_service');


    function routes(app) {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use('/api', loginUser)


   /*
    *  User Authorization Checking Process
    */
        // app.use('/api/chat', (req, res, next) => {
        //     console.log(req.headers)
        //     const token = (req.headers || {}).authorization
        //     console.log(token)
        //     if (!token) {
        //         res.status(401).json({ msg: 'Your Not Authorized' })
        //     }
        //     let tokenVerify;
        //     try {
        //         tokenVerify = TockenServ.verifyToken(token)
        //         next();
        //     } catch (error) {
        //        res.status(401).json({ message: error.message })
        //        next();
        //     }
        // })
        app.use('/api/chat', UserChats)
    }


    module.exports = routes;
})();