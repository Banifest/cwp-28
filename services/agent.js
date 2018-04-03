const db = require('../index');

module.exports = class Agent extends require('./crud')
{
    constructor()
    {
        super(db.agent, 'agent');
    }


};