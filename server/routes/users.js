const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth')

const userController = require('../controllers/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('INDEX USERS');
});

router.post('/register', userController.register)

router.post('/login', userController.login)
      
router.get('/auth', auth, userController.getUser)
router.get('/all',userController.allUser)

module.exports = router;
