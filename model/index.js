const Promise = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

module.exports = (Sequelize, config)=>
{
    const sequelize = new Sequelize('database', 'username', '',
        {
            host: 'localhost',
            dialect: 'sqlite',
            storage: './dataBase',
            define: {
                timestamps: false,
                paranoid: true
            }
        });

    const ingestion = require('./ingestion')(Sequelize, sequelize);
    const person = require('./person')(Sequelize, sequelize);
    const food = require('./food')(Sequelize, sequelize);
    const agent = require('./agent')(Sequelize, sequelize);

    ingestion.belongsTo(food, {foreignKey: 'foodId'});
    ingestion.belongsTo(person, {foreignKey: 'personId'});
    ingestion.belongsTo(agent, {foreignKey: 'reportedById'});

    return {
        ingestion,
        person,
        food,
        agent,
        sequelize: sequelize,
        Sequelize: Sequelize
    };
};