'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PlaylistSong = sequelize.define('PlaylistSong', {
    playlistId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});

  PlaylistSong.associate = function(models) {
    // associations can be defined here
    PlaylistSong.belongsTo(models.Song, { foreignKey: 'songId' });
    PlaylistSong.belongsTo(models.Playlist, { foreignKey: 'playlistId' });
  };

  return PlaylistSong;
};