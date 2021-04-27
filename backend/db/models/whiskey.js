'use strict';
module.exports = (sequelize, DataTypes) => {
  const Whiskey = sequelize.define('Whiskey', {
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    distiller:{
      type: DataTypes.STRING,
      allowNull: false
    },
    drinkPhoto:{
      type: DataTypes.TEXT,
      allowNull: true
    },
    rating:{
      type: DataTypes.DECIMAL(3,2),
      allowNull: false
    },
    review:{
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {});
  Whiskey.associate = function(models) {
    // associations can be defined here
    // Whiskeys.belongsTo(models.User, { foreignKey: 'userId' })
    Whiskey.hasMany(models.Variation, { foreignKey: 'whiskeyId' })

  };
  return Whiskey;
};