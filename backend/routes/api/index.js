const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js');
const commentsRouter = require('./comments.js');
const playlistsRouter = require('./playlists.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/songs', songsRouter);

router.use('/comments', commentsRouter);

router.use('/playlists', playlistsRouter);

module.exports = router;

