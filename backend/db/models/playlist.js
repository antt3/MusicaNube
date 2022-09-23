'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 35]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  });



  Playlist.associate = function(models) {
    const columnMapping = {
      through: 'PlaylistsAndSongs',
      otherKey: 'songId',
      foreignKey: 'playlistId'
    };

    // associations can be defined here
    Playlist.belongsTo(models.User, { foreignKey: 'userId' });
    Playlist.belongsToMany(models.Song, columnMapping);
  };

  return Playlist;
};