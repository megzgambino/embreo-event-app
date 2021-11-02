const { passwordComparer, tokenGenerator } = require('../helpers/index')
const { User } = require('../models')

module.exports = class UserController {

    static login (req, res) {
        const { username, password } = req.body
        User.findOne({
            where: {
                username
            }
        })
        .then((user) => {
            if (!user) throw({error: 'User Doesnt Exist!'})
            const isCorrect = passwordComparer(password, user.password)
            // console.log(isCorrect)
            if (!isCorrect) throw({error: 'Wrong Password!'})

            const access_token = tokenGenerator({
                id: user.id,
                type: user.type,
                username: user.username
            })
            // console.log(access_token)

            res.status(200).json({
                id: user.id,
                type: user.type,
                username: user.username,
                access_token
            })
        })
        .catch(err => res.status(500).json(err))
    }

    static register (req, res) {
        const { type, username, password } = req.body

        User.create({
            type,
            username,
            password
        })
        .then((user) => {
            res.status(201).json({
                id: user.id,
                type: user.type,
                username: user.username
            })
        })
        .catch(err => res.status(500).json(err))
    }

    static findAllUser (req, res) {
        User.findAll()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch(err => res.status(500).json(err))    
    }
}