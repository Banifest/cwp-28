module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Ingestion', {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        when: {type: Sequelize.DATETIME},
    });
};