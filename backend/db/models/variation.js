'use strict';
module.exports = (sequelize, DataTypes) => {
  const Variation = sequelize.define('Variation', {
    whiskeyId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cocktailName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    cocktailPhoto:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    review:{
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Variation.associate = function(models) {
    // associations can be defined here
    Variation.belongsTo(models.User, {foreignKey: 'userId'})
    Variation.belongsTo(models.Whiskey, {foreignKey: 'whiskeyId'})
  };
  return Variation;
};