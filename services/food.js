const db = require('../index');
const moment = require('moment');

module.exports = class Food extends require('./crud')
{
    constructor()
    {
        super(db.food, 'food');
    }
};