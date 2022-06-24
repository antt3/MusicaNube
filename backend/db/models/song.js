'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    songPic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  });

  User.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: 'userId' });
    Song.hasMany(models.Comment, { foreignKey: 'songId', onDelete: 'CASCADE', hooks: true });
  };
};