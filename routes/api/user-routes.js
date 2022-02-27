const router = require('express').Router();

const { getAllUsers, createUser, getUserByID, updateUser, deleteUser, createFriend, deleteFriend } = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router 
    .route('/:id')
    .get(getUserByID)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:id/friends/:friendId')
    .post(createFriend)
    .delete(deleteFriend);

    module.exports = router;