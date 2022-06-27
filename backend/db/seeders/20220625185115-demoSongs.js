'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
	  	  	  'Songs',
	  	  	  [
	  	  	  	  {
	  	  	  	  	  title: '',
                    artist: '',
                    songPic: '',
                    link: '',
	  	  	  	  	  userId: 1,
	  	  	  	  	  createdAt: new Date(),
	  	  	  	  	  updatedAt: new Date(),
	  	  	  	  },
                {
                    title: '',
                    artist: '',
                    songPic: '',
                    link: '',
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: '',
                    artist: '',
                    songPic: '',
                    link: '',
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: '',
                    artist: '',
                    songPic: '',
                    link: '',
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: '',
                    artist: '',
                    songPic: '',
                    link: '',
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
	  	  	  	  	  title: '',
                    artist: '',
                    songPic: '',
                    link: '',
	  	  	  	  	  userId: 3,
	  	  	  	  	  createdAt: new Date(),
	  	  	  	  	  updatedAt: new Date(),
	  	  	  	  },
            ], {}
        );
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Songs', null, {});
    },
};
