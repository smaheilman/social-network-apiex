const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    removeFriend,
    addFriend
} = require('../../controllers/user-controller');

//set up get/post all
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
//set up GET one, PUT AND DELETE
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
    .put(addFriend)


router
    .route('/:userId/:friendId')
    .delete(removeFriend)
module.exports = router;