const router = require('express').Router();
const redisController = require('../controllers/redisController.js');
const userController = require('../controllers/userController.js');
const postController = require('../controllers/postController');
const likeController = require('../controllers/likesController');
const messageController = require('../controllers/messageController');
const friendController = require('../controllers/friendController');
const categoryController = require('../controllers/categoryController');
const roomstatController = require('../controllers/roomstatController');

//redis router?
router.get('/getcache', redisController.getSomething);
router.post('/postcache', redisController.postSomething);

//user routes
router.get('/users', userController.getUser);
router.post('/users', userController.addUser);
router.delete('/users', userController.deleteUser);

//posts
router.get('/posts', postController.getPost);
router.post('/posts', postController.addPost);
router.delete('/posts', postController.deletePost);

//likes
router.get('/likes', likeController.getLike);
router.post('/likes', likeController.addLike);
router.delete('/likes', likeController.deleteLike);

//message
router.get('/messages', messageController.addMessage);
router.post('/messages', messageController.postMessage);
router.delete('/messages', messageController.delete);

//friend
router.get('/friends', friendController.getFriend)
router.post('/friends', friendController.addFriend)
router.delete('/friends', friendController.deleteFriend)

//categories
router.get('/categories', categoryController.getCategory)
router.post('/categories', categoryController.postCategory)
router.delete('/categories', categoryController.deleteCategory)

//roomstat
router.get('/rooms', roomstatController.getRoomstat)
router.post('/rooms', roomstatController.addRoomstat)
router.delete('/rooms', roomstatController.deleteRoomstat)

module.exports = router;