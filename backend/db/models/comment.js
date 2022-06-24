'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    songId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
    
  };
};