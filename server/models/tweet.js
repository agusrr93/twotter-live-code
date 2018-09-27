const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {timestamps: true})

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet