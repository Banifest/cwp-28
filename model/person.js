module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Person', {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: Sequelize.STRING(50)},
        address: {type: Sequelize.STRING(50)},
        isAlive: {type: Sequelize.BOOLEAN},
    });
};