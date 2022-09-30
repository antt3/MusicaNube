'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Playlists',
      [
        {
          name: 'Playlist 1',
          userId: 1,
          pic: "https://images.assetsdelivery.com/compings_v2/fokaspokas/fokaspokas1808/fokaspokas180802038.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist 2',
          userId: 1,
          pic: "https://i.pinimg.com/originals/f8/65/d3/f865d3112022612c6875b4ab7ec54239.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist 3',
          userId: 1,
          pic: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist 4',
          userId: 1,
          pic: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist Uno',
          userId: 2,
          pic: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist Dos',
          userId: 2,
          pic: "https://i.pinimg.com/736x/55/27/89/552789ccf1e4e919e17930976a5e62c9.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Playlist Tres',
          userId: 2,
          pic: "",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'My Favorites',
          userId: 3,
          pic: "https://www.kindpng.com/picc/m/111-1119487_transparent-music-notes-heart-clipart-music-with-hearts.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vibes',
          userId: 3,
          pic: "https://i.pinimg.com/474x/7c/d1/e8/7cd1e861c95da51f9f5d89283bca7bf8.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Everything',
          userId: 3,
          pic: "",
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
