'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Variations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      whiskeyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Whiskeys'}
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model: 'Users'}
      },
      cocktailName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cocktailPhoto: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      rating: {
        type: Sequelize.DECIMAL(3,2),
        allowNull:false
      },
      review: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Variations');
  }
};