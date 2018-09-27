const Follow = require('../models/follow')

class Controller {

     static populateFollow(req, res) {
            Follow.findOne({user_data:req.decoded._id})
            .populate({
                path: 'following',
                select: '_id name email',
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({error: err.message})
            })
     }
    
    static follow_user(req, res) {
        Follow.updateOne({user_data:req.decoded.id}, {$push: {following: req.params.id}})
            .then(() => {
                res.status('success following user')
             })
            .catch(err => {
                res.status(500).json({error: err.message})
             })
    }

    static unfollow_user(req, res) {
        Follow.updateOne({user_data: req.decoded.id}, {$pull: {following: req.params.id}})
            then(() => {
                res.status('success unfollowing user')
            })
            .catch(err => {
                res.status(500).json({error: err.message})
            })
    }

}

module.exports = Controller