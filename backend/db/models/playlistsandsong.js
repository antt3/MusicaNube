'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const PlaylistsAndSong = sequelize.define('PlaylistsAndSong', {
    playlistId: {
      type: DataTypes.INTEGER
    },
    songId: {
      type: DataTypes.INTEGER
    }
  });

  PlaylistsAndSong.associate = function(models) {
    // associations can be defined here
  };

  return PlaylistsAndSong;
};