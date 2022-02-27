const router = require('express').Router();

const { getAllThoughts, createThought, getThoughtByID, updateThought, deleteThought, createReaction, deleteReaction } = require('../../controllers/thought-controller');

//get all thoughts
router
    .route('/')
    .get(getAllThoughts);

//post a new thought
router
    .route('/:userId')
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtByID)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:id/reactions')
    .post(createReaction);

router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;