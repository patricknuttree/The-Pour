'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Whiskeys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }, 
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      distiller: {
        type: Sequelize.STRING,
        allowNull: false
      },
      drinkPhoto: {
        type: Sequelize.TEXT,
        allowNull:true
      },
      rating: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      review: {
        type: Sequelize.TEXT,
        allowNull: true,
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
    return queryInterface.dropTable('Whiskeys');
  }
};