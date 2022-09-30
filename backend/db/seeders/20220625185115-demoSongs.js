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
	  	  		  	updatedAt: new Date()
	  	  		  },
                {
                    title: 'Day For Day',
                    artist: 'Kodak Black',
                    songPic: 'https://upload.wikimedia.org/wikipedia/en/7/7f/PaintingPicturesKodakBlack.png',
                    link: 'https://soundcloud.com/kodak-black/day-for-day',
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Feels Like Summer',
                    artist: 'Childish Gambino',
                    songPic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fksassets.timeincuk.net%2Fwp%2Fuploads%2Fsites%2F55%2F2018%2F09%2FScreen-Shot-2018-09-04-at-17.53.20-920x614.png&f=1&nofb=1',
                    link: 'https://soundcloud.com/childish-gambino/feels-like-summer',
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Freedom [prod. Redmosk]',
                    artist: 'CutThroatCrew',
                    songPic: 'https://i.scdn.co/image/ab67616d0000b2736601bee0fea59cca2f31157a',
                    link: 'https://soundcloud.com/cutthroatcrew/freedom-prod-redmosk',
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Lil Uzi Vert - 20 Min',
                    artist: 'Lil Uzi Vert',
                    songPic: 'https://images.genius.com/50af11dfe454a4aa20544f19b2dd0791.1000x1000x1.png',
                    link: 'https://soundcloud.com/liluzivert/20-min-1',
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Way Back (Prod. Mikey The Magician)',
                    artist: 'Shakewell',
                    songPic: 'https://i.scdn.co/image/ab67616d0000b2736bc693e76e518a53195e0c91',
                    link: 'https://soundcloud.com/shakewell818/way-back-master-finished',
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Meet Again',
                    artist: 'MAXO KREAM',
                    songPic: 'https://i.scdn.co/image/ab67616d0000b273fbd14d4ff83250a51f8aa246',
                    link: 'https://soundcloud.com/maxo-kream/meet-again',
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Pick It Up (feat. A$AP Rocky) [Prod. By FKi1st and Sosa808]',
                    artist: 'Famous Dex',
                    songPic: 'https://upload.wikimedia.org/wikipedia/en/3/3e/PickItUpDexter.jpg',
                    link: 'https://soundcloud.com/famous_dex1/pick-it-up-dirty-jl-master',
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: '2OUTH2ID3 Prod: WillyGotFlame (video out now)',
                    artist: 'CRASH RARRI',
                    songPic: 'https://i.scdn.co/image/ab67616d0000b27377cc1d79ef254b1b24ad212b',
                    link: 'https://soundcloud.com/rarri223/2outh2id3-prod-willygotflame',
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Interstate 10 [Prod. $crim]',
                    artist: 'CHETTA',
                    songPic: 'https://i1.sndcdn.com/artworks-000131261375-ovulca-t240x240.jpg',
                    link: 'https://soundcloud.com/j-chetta/interstate-10-prod-crim',
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Three Little Birds',
                    artist: 'Bob Marley & The Wailers',
                    songPic: 'https://i.scdn.co/image/ab67616d0000b2733dad91f4a796045ac25496f3',
                    link: 'https://soundcloud.com/bob-marley-the-wailers/three-little-birds-album',
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: '(Sittin\' On) the Dock of the Bay',
                    artist: 'Otis Redding',
                    songPic: 'https://m.media-amazon.com/images/I/71GhROjL9kL._SL1425_.jpg',
                    link: 'https://soundcloud.com/otisredding/otis-redding-stories-raphael-saddiq-on-sittin-on-the-dock-of-the-bay',
                    userId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Paranoid (2012 - Remaster)',
                    artist: 'Black Sabbath',
                    songPic: 'https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg',
                    link: 'https://soundcloud.com/blacksabbath/paranoid',
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: 'Self Care',
                    artist: 'Mac Miller',
                    songPic: 'https://townsquare.media/site/812/files/2018/07/mac-miller-swimming-cover.jpg?w=1080&q=75',
                    link: 'https://soundcloud.com/larryfisherman/self-care',
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ], {}
        );
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Songs', null, {});
    }
};
