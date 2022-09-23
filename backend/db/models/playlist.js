'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    name: {
      DataTypes.STRING
    },
    userId: {
      DataTypes.INTEGER
    }
  });

  Playlist.associate = function(models) {
    // associations can be defined here
    Playlist.belongsTo(models.User, { foreignKey: 'userId' });
    Playlist.hasMany(models.PlaylistsAndSongs, { foreignKey: 'playlistId', onDelete: 'CASCADE', hooks: true });
  };

  return Playlist;
};