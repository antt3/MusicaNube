const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { Song } = require('../../db/models');

const router = express.Router();

// Get Songs
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const songs = await Song.findAll();
		return res.json(songs);
	})
);

const validateSong = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a song.'),
    handleValidationErrors
];

// Post Song
router.post(
	'/',
	validateSong,
	asyncHandler(async (req, res) => {
	    const { title, artist, songPic, link, sessionUser } = req.body;
	    const userId = sessionUser.id;
	    const song = await Song.create({ title, artist, songPic, link, userId });
	    
    
	    return res.json(song);
	})
  );
  
// Edit Song
router.put(
	'/:id(\\d+)',
	validateSong,
	asyncHandler(async (req, res) => {
	    const { title, artist, songPic, link, sessionUser } = req.body;
	    const songId = parseInt(req.params.id);
	    const song = await Song.findByPk(songId);
	    await song.update({ title, artist, songPic, link });
	    const newSong = await Song.findByPk(songId);
	    return res.json(newSong);
	})
);
  
// Delete Song
router.delete(
	'/:id(\\d+)',
	asyncHandler(async (req, res) => {
	const songId = parseInt(req.params.id, 10)
	const song = await Song.findByPk(songId)
	if (song) {
	    await song.destroy();
	    return res.json(songId);
	} else {
	    throw new Error('Cannot find song.');
	}
}));

module.exports = router;