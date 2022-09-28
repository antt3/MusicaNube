const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { Playlist } = require('../../db/models');
const { User } = require('../../db/models');

const router = express.Router();

// Get Playlists
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const playlists = await Playlist.findAll({
			include: User
		});
		return res.json(playlists);
	})
);

const validatePlaylist = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a playlist name.'),
    handleValidationErrors
];

// Post Playlist
router.post(
	'/',
	validatePlaylist,
	asyncHandler(async (req, res) => {
	    const { name, pic } = req.body;
	    const userId = sessionUser.id;
	    const playlist = await Playlist.create({ name, pic, userId });
	    
    
	    return res.json(playlist);
	})
  );
  
// Edit Playlist
router.put(
	'/:id(\\d+)',
	validatePlaylist,
	asyncHandler(async (req, res) => {
	    const { name, pic } = req.body;
	    const playlistId = parseInt(req.params.id);
	    const playlist = await Playlist.findByPk(playlistId);
	    await playlist.update({ name, pic });
	    const newPlaylist = await Playlist.findByPk(playlistId);
	    return res.json(newPlaylist);
	})
);
  
// Delete Playlist
router.delete(
	'/:id(\\d+)',
	asyncHandler(async (req, res) => {
	const playlistId = parseInt(req.params.id, 10)
	const playlist = await Playlist.findByPk(playlistId)
	if (playlist) {
	    await playlist.destroy();
	    return res.json(playlistId);
	} else {
	    throw new Error('Cannot find playlist.');
	}
}));

module.exports = router;