const Tweet = require('../models/tweet')

class Controller {

    static postTweet(req, res) {
        let newTweet = {
            title: req.body.content,
            user: req.decoded.id,
            content: req.body.content
        }

        Tweet.create(newTweet)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({error: err.message})
            })
    }

    static tweetbyUser(req,res){
        Tweet.find({user:req.decoded.id})
        .then(tweet=>{
            res.status(200).json(tweet)
        })
        .catch(err=>{
            res.status(500).json(tweet)
        })
    }

    static tweetDelete(req,res){
        Tweet.deleteOne({_id: req.params.id})
            .then(() => {
                res.status(200).json({message: 'Tweet deleted!'})
            })
            .catch(err => {
                res.status(500).json({error: err.message})
            })   
    }
    

    static getTweet(req, res) {
        Tweet.find()
            .sort({ createdAt: 'desc' })
            .populate('user', '_id name email')
            .then(tweet => {
                res.status(200).json(tweet)
            })
            .catch(err => {
                res.status(500).json({error: err.message})
            })
    }

 }

module.exports = Controller