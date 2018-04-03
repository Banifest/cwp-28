const sequelize = require('sequelize');

class Ingestion extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/ingestion'))());
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new Ingestion()).router;
};