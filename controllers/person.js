const sequelize = require('sequelize');

class Person extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/person'))());
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new Person()).router;
};