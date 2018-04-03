const db = require('../index');

module.exports = class Ingestion extends require('./crud')
{
    constructor()
    {
        super(db.ingestion, 'ingestion');
    }


};