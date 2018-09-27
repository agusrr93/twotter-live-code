const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth')

const followController = require('../controllers/following')

router.get('/',auth,followController.populateFollow)

router.patch('/follow/:id', auth , followController.follow_user)
router.patch('/unfollow/:id', auth, followController.unfollow_user)

module.exports = router;
