const router = require('express').Router();

const sessionRouter = require('./session');
const usersRouter = require('./users');
const songsRouter = require('./songs');
const commentsRouter = require('./comments');
const playlistsRouter = require('./playlists');
const playlistSongsRouter = require('./playlistSongs');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/songs', songsRouter);

router.use('/comments', commentsRouter);

router.use('/playlists', playlistsRouter);

router.use('/playlist-songs', playlistSongsRouter);

module.exports = router;

