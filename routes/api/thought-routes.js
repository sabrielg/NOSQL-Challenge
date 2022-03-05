const router = require('express').Router();
const { addThought, removeThought, addReply, removeReaction } = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId')
.put(addReply)
.delete(removeThought);

router.route('/api/thoughts/:thoughtId/reactions')
.post()
.delete()

router.route('/:UserId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;