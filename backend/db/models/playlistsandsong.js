'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PlaylistsAndSong = sequelize.define('PlaylistsAndSong', {
    playlistId: {
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

  PlaylistsAndSong.associate = function(models) {
    // associations can be defined here
    PlaylistsAndSong.belongsTo(models.Playlist, { foreignKey: 'playlistId' });
    PlaylistsAndSong.belongsTo(models.Song, { foreignKey: 'songId' });
  };

  return PlaylistsAndSong;
};