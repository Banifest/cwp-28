module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Agent', {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        callsign: {type: Sequelize.STRING(50)},
    });
};