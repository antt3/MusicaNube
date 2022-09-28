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
  const playlistSong = await PlaylistSong.create(req.body);
  return res.json(playlistSong);
}))

router.delete('/:id', asyncHandler(async(req, res) => {
  const song = await Song.findByPk(req.params.id)
  const playlistSong = await PlaylistSong.findOne({where: {songId: song.id}})
  if (playlistSong) {
    await playlistSong.destroy()
    return res.json(playlistSong)
  } else {
        throw new Error('Cannot find playlist song.');
  }
}))

module.exports = router