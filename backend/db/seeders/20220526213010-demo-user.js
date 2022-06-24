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
        profilePic: 'https://resi.ze-robot.com/dl/sy/synthwave-sunset-1280%C3%971024.jpg'
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        location: 'New York City, USA',
        bio: 'I\'m the king of New York!',
        profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F99%2Fba%2Fc1%2F99bac1dab2b7567ca3012b3c3ce89cdc.jpg&f=1&nofb=1'
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