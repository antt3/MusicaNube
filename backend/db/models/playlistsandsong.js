'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PlaylistsAndSong = sequelize.define('PlaylistsAndSong', {
    playlistId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {});

  PlaylistsAndSong.associate = function(models) {
    // associations can be defined here
  };

  return PlaylistsAndSong;
};