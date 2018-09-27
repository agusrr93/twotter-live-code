const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth')


const tweetController = require('../controllers/tweet')

router.post('/', auth, tweetController.postTweet)

router.get('/find', auth, tweetController.tweetbyUser)
router.delete('/delete/:id', auth,tweetController.tweetDelete)
router.get('/getall',auth,tweetController.getTweet)

module.exports = router;
