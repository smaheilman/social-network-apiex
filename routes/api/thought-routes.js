const router = require('express').Router();
const {getAllThoughts, addThought, removeThought, addReaction, removeReaction} = require('../../controllers/thought-contoller');

router
    .route('/')
    .get(getAllThoughts)

router.route('/:userId')
.post(addThought);

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports =router;