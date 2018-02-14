'use strict';
(function() {
    const User = require('../db/schema.js');
    const express = require('express');
    const TockenServ = require('../service/tocken_service');
    const router = express.Router();

    router.route('/auth')

        /*
         * Get All Users
         */
        .get((req, res, next) => {
            User.find()
                .then(doc => res.json(doc))
                .catch(next)
        })


        /*
         *New User Add
         */
        .post((req, res, next) => {
            const { name, email, password } = req.body || {};
            const user = new User({ name, email, password });
            user.save((err, doc) => {
                if (err) {
                    res.status(404).json({ msg: 'This Email Already Exist' });
                } else {
                    const tokenKey = TockenServ.generatToken(doc._id);
                    res.status(200).json({ msg: 'User Save Successfuly', token: tokenKey })
                    const htmlStr = `
              <b>Loading... Just a second</b>
              <script>
              var token = '${token}';
              localStorage.token = token;
              location.href = '/#!/todos'
              </script>
              `;
                    return res.send(htmlStr);
                }
            })

        })


    /*
     * Change Password Using Put Method
     */

    router.route('/auth/:id')
        .put((req, res, next) => {
            const id = req.params.id;
            const { password } = req.body || {};
            console.log('id', id, password)
            User.findByIdAndUpdate(id, password, { new: true })
                .then(doc => res.json(doc))
                .catch(next)
        })

    /*
     * Error Handling
     */

    router.use((error, req, res, next) => {
        const { message } = error || {};
        const isSuccess = false;
        res.json({ message, isSuccess })
    })


    module.exports = router;
})();