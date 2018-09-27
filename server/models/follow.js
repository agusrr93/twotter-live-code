const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    user_data:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    following:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }]
}, {timestamps: true})

const Follow = mongoose.model('Follow', followSchema)

module.exports = Follow