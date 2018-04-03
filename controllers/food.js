const sequelize = require('sequelize');

class Food extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/food'))());
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new Food()).router;
};