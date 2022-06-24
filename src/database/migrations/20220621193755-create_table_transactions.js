'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('transactions',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        concept: {
          type: Sequelize.DataTypes.STRING(100),
          allowNull: false
        },
        date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false
        },
        type: {
          type: Sequelize.DataTypes.STRING(10),
          allowNull: false
        },
        amount: {
          type: Sequelize.DataTypes.DECIMAL(25, 2),
          allowNull: false
        }
      })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('transactions');
  }
};
