const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/User-controller');

//set up get/post all
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
//set up GET one, PUT AND DELETE
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;