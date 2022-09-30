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
    pic: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 256]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  }, {});



  Playlist.associate = function(models) {
    const columnMapping = {
      through: 'PlaylistSongs',
      otherKey: 'songId',
      foreignKey: 'playlistId'
    };

    // associations can be defined here
    Playlist.hasMany(models.PlaylistSong, { foreignKey: 'playlistId', onDelete: 'CASCADE', hooks: true });
    Playlist.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Playlist;
};