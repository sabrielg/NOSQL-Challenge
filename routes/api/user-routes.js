const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriendById,
    deleteFriend
  } = require('../../controllers/user-controller');


// Set up GET all and POST at /api/pizzas
router
  .route('/api/users')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  router
  .route('/api/users/:userId/friends/:friendId')
  .post(createFriendById)
  .delete(deleteFriend)


module.exports = router;