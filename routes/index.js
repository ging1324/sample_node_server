var express = require('express');
var router = express.Router();
const userController = require('../controller/user');
const boardController = require('../controller/board');



router.get('/', userController.basicAPI)
router.get('/test', userController.testAPI)
router.post('/post_test', userController.postTestAPI)
router.post('/addUser', userController.addUser)
router.get('/login', userController.login)
router.get('/userInfo', userController.getUserInfo)
router.get('/boardList', boardController.boardList)
router.get('/boardDetail', boardController.boardDetail)
router.post('/boardAdd', boardController.boardAdd)




module.exports = router;
