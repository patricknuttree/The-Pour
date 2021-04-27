'use strict';
module.exports = (sequelize, DataTypes) => {
  const Variations = sequelize.define('Variations', {
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
  Variations.associate = function(models) {
    // associations can be defined here
    Variations.belongsTo(models.User, {foreignKey: 'userId'})
    Variations.belongsTo(models.Whiskey, {foreignKey: 'WhiskeyId'})
  };
  return Variations;
};