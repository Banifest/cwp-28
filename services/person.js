const db = require('../index');
const validators = require('./validators');

module.exports = class Person extends require('./crud')
{
    constructor()
    {
        super(db.person, 'person');
    }
};