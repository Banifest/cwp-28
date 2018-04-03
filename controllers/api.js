const express = require('express');

module.exports = () =>
{
    const router = express.Router();

    router.use(require('../global-contollers/logger'));
    router.use('/users',require('./person')());
    router.use('/tweets', require('./food')());
    router.use('/likes', require('./agent')());
    router.use(require('../global-contollers/error'));

    return router;
};