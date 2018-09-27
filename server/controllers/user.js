const User = require('../models/user')
const jwt = require('jsonwebtoken')
const encrypt = require('../helpers/encrypt')

class Controller {

    static allUser(req,res){
            User.find()
                .then(user => {
                    res.status(200).json(user)
                })
                .catch(err => {
                    res.status(500).json({error: err.message})
                })
        
    }
    static getUser(req, res) {
        res.status(200).json(req.decoded)
    }

    static register (req, res) {
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User.create(newUser)
            .then((data) => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({error: err.message})
            })
    }

    static login(req, res) {
        let hashed = encrypt.hashPassword(req.body.password, req.body.email)

        User.findOne({email: req.body.email, password: hashed})
            .then(user => {
                let obj = {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }

                jwt.sign(obj,'dani', (err, token) => {
                    if (err) {
                        res.status(500).json(err)
                    } else {
                        res.status(200).json(token)
                    }
                })
            })
            .catch(err => {
                res.status(500).json({error: err.message})
            })
    }
}

module.exports = Controller