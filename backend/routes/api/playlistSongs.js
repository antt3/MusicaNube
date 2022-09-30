const express = require('express');
const asyncHandler = require('express-async-handler');
const {PlaylistSong, Song} = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async(req, res) => {
  const playlistSongs = await PlaylistSong.findAll({
    include: Song
  });
  return res.json(playlistSongs)
}))

router.post('/', asyncHandler(async(req, res) => {
  const { playlistId, songId } = req.body;
  const newPlaylistSong = await PlaylistSong.create({ playlistId, songId });
  const playlistSong = await PlaylistSong.findByPk(newPlaylistSong.id, {
    include: Song
  })
  return res.json(playlistSong);
}))

router.delete('/:id', asyncHandler(async(req, res) => {
  const playlistSongId = req.params.id;
  const playlistSong = await PlaylistSong.findByPk(playlistSongId)
  if (playlistSong) {
    await playlistSong.destroy();
    return res.json(playlistSongId);
  } else {
        throw new Error('Cannot find playlist song.');
  }
}))

module.exports = router