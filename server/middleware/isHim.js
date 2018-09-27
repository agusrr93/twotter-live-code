const Tweet = require('../models/tweet')

module.exports = {
  tweet: (req, res, next) => {
    Tweet.findById(req.params.id)
      .then(tweet => {
        if (tweet.user == req.decoded.id) {
          next()
        } else {
          res.status(401).json({error: 'You are not allowed to access this question!'})
        }
      })
      .catch(err => {
        res.status(500).json({error: err.message})
      })
  }
}