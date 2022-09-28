'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'PlaylistsAndSongs',
      [
        {
          playlistId: 1,
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 1,
          songId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 1,
          songId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 1,
          songId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 2,
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 2,
          songId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 2,
          songId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 3,
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 3,
          songId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 3,
          songId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 3,
          songId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 4,
          songId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 4,
          songId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 4,
          songId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 4,
          songId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 5,
          songId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 5,
          songId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 5,
          songId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          playlistId: 5,
          songId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          playlistId: 5,
          songId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 6,
          songId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 6,
          songId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 6,
          songId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 6,
          songId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 6,
          songId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 7,
          songId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 7,
          songId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 7,
          songId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 7,
          songId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 7,
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 8,
          songId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 8,
          songId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 8,
          songId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 8,
          songId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 8,
          songId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 8,
          songId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 8,
          songId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 9,
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 9,
          songId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 9,
          songId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 9,
          songId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 9,
          songId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 9,
          songId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          playlistId: 10,
          songId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PlaylistsAndSongs', null, {});
  }
};
