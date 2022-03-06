const router = require('express').Router();
const { addThought, removeThought, addReaction, removeReaction, getAllThoughts } = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts)

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

router.route('/:thoughtId/reactions')
.post(addReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;