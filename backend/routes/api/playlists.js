const express = require('express');
const asyncHandler = require('express-async-handler');
const {Playlist, Song} = require('../../db/models');

const router = express.Router()

router.get('/', asyncHandler(async(req, res) => {
  const playlists = await Playlist.findAll();
  return res.json(playlists)
}))

router.post('/', asyncHandler(async(req, res) => {
  const playlists = await Playlist.create(req.body);
  return res.json(playlists)
}))

router.delete('/:id', asyncHandler(async(req, res) => {
  const song = await Song.findByPk(req.params.id)
  const playlist = await Playlist.findOne({where: {songId: song.id}})
  await playlist.destroy()
  return res.json(playlist)
}))

module.exports = router