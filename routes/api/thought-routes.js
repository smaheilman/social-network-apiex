const router = require('express').Router();
const {getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction} = require('../../controllers/thought-contoller');
    
router.route('/:userId')
    .post(addThought)
    .get(getThoughtById)
    .get(getAllThoughts)


router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought)
    .put(updateThought)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports =router;