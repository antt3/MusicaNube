'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
	  	  	  'Songs',
	  	  	  [
	  	  	  	  {
	  	  	  	  	  title: 'What I Got',
                    artist: 'Sublime',
                    songPic: 'https://i.scdn.co/image/ab67616d0000b2738fc4b0dcfb9509553f195c85',
                    link: 'https://soundcloud.com/sublimeofficial/what-i-got-2',
	  	  	  	  	  userId: 1,
	  	  	  	  	  createdAt: new Date(),
	  	  	  	  	  updatedAt: new Date(),
	  	  	  	  },
                {
                    title: 'Day For Day',
                    artist: 'Kodak Black',
                    songPic: 'https://upload.wikimedia.org/wikipedia/en/7/7f/PaintingPicturesKodakBlack.png',
                    link: 'https://soundcloud.com/kodak-black/day-for-day',
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: 'Feels Like Summer',
                    artist: 'Childish Gambino',
                    songPic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fksassets.timeincuk.net%2Fwp%2Fuploads%2Fsites%2F55%2F2018%2F09%2FScreen-Shot-2018-09-04-at-17.53.20-920x614.png&f=1&nofb=1',
                    link: 'https://soundcloud.com/childish-gambino/feels-like-summer',
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ], {}
        );
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Songs', null, {});
    },
};
