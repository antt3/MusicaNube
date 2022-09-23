'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 75]
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 75]
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

  Song.associate = function(models) {
    const columnMapping = {
      through: 'PlaylistsAndSongs',
      otherKey: 'playlistId',
      foreignKey: 'songId'
    };

    // associations can be defined here
    Song.belongsTo(models.User, { foreignKey: 'userId' });
    Song.belongsToMany(models.Song, columnMapping);
    Song.hasMany(models.Comment, { foreignKey: 'songId', onDelete: 'CASCADE', hooks: true });
  };

  return Song;
};