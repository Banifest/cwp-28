const express = require('express');

module.exports = () =>
{
    const router = express.Router();

    router.use(require('../global-contollers/logger'));
    router.use('/users',require('./user')());
    router.use('/tweets', require('./tweet')());
    router.use('/likes', require('./like')());
    router.use(require('../global-contollers/error'));

    return router;
};