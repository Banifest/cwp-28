const sequelize = require('sequelize');

class Agent extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/agent'))());
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new Agent()).router;
};