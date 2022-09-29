const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { Song } = require('../../db/models');
const { User } = require('../../db/models');

const router = express.Router();

// Get Songs
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const songs = await Song.findAll({
			include: User
		});
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
	    const newSong = await Song.create({ title, artist, songPic, link, userId });
	    const song = Song.findByPk(newSong.id, {
			include: User
		})
    
	    return res.json(song);
	})
  );
  
// Edit Song
router.put(
	'/:id(\\d+)',
	validateSong,
	asyncHandler(async (req, res) => {
	    const { title, artist, songPic, link } = req.body;
	    const songId = parseInt(req.params.id);
	    const song = await Song.findByPk(songId);
	    await song.update({ title, artist, songPic, link });
	    const newSong = await Song.findByPk(songId, {
			include: User
		});
	    return res.json(newSong);
	})
);
  
// Delete Song
router.delete(
	'/:id(\\d+)',
	asyncHandler(async (req, res) => {
	const songId = parseInt(req.params.id, 10)
	const song = await Song.findByPk(songId, {
		include: User
	})
	if (song) {
	    await song.destroy();
	    return res.json(songId);
	} else {
	    throw new Error('Cannot find song.');
	}
}));

module.exports = router;