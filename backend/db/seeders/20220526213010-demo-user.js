'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        location: 'Sacramento, USA',
        bio: 'I love music. Music is cool!',
        profilePic: 'https://i.pinimg.com/originals/99/ba/c1/99bac1dab2b7567ca3012b3c3ce89cdc.jpg'
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        location: 'New York City, USA',
        bio: 'I\'m the king of New York!',
        profilePic: 'https://ih1.redbubble.net/image.846719347.2717/pp,504x498-pad,600x600,f8f8f8.jpg'
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        location: '',
        bio: '',
        profilePic: ''
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};