'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Comments',
            [
                {
                    content: 'Me gusta Sublime!!!',
                    userId: 2,
                    songId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    content: 'This is my favorite song',
                    userId: 3,
                    songId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'GOAT',
                    userId: 3,
                    songId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: ':(',
                    userId: 1,
                    songId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'I remember 2018 like it was yesterday...',
                    userId: 2,
                    songId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'Classic',
                    userId: 3,
                    songId: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'Issa Vibe',
                    userId: 1,
                    songId: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'I\'d rather be carried by six then to be judged by 12',
                    userId: 2,
                    songId: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'DEXTER UH YEAH UH WHAT',
                    userId: 1,
                    songId: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'Sucks that Dex fell off',
                    userId: 1,
                    songId: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'FRFR',
                    userId: 2,
                    songId: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'RIP BOB MARLEY',
                    userId: 1,
                    songId: 11,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'Old School',
                    userId: 2,
                    songId: 11,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
                {  
                    content: 'I wish people still made music like this',
                    userId: 1,
                    songId: 11,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },  
            ], {}  
        );
    },
  
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});
    }
};
