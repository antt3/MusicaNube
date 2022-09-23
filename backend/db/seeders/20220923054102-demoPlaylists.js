'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Playlists',
      [
        {
          name: 'Playlist 1',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist 2',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist 3',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist 4',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist Uno',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist Dos',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist Tres',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'My Favorites',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vibes',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Everything',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
