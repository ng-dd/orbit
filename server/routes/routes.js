const router = require('express').Router();
const redisController = require('../controllers/redisController.js');

//redis router?
router.get('/getcache', redisController.getSomething)
router.post('/postcache', redisController.postSomething)

module.exports = router;