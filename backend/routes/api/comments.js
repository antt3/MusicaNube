const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { Comment } = require('../../db/models');
const { User } = require('../../db/models');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const comments = await Comment.findAll({
			include: User
		});
		return res.json(comments);
	})
);

const validateComment = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a comment.'),
    handleValidationErrors
];

router.post(
	'/',
	validateComment,
	asyncHandler(async (req, res) => {
		const comment = await Comment.create(req.body);

		return res.json(comment);
	})
);

router.delete(
	'/:id(\\d+)',
	asyncHandler(async (req, res) => {
        const commentId = parseInt(req.params.id, 10)
		const comment = await Comment.findByPk(commentId);
		if (comment) {
			await comment.destroy();
            return res.json(commentId);
		} else {
            throw new Error('Cannot find comment.');
        }
	})
);



module.exports = router;