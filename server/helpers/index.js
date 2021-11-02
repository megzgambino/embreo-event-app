const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const PRIVATE_KEY = 'SECRET'

function passwordHasher (password) {
    let salt = bcrypt.genSaltSync(10)
    let hashed = bcrypt.hashSync(password, salt)

    return hashed
}

function passwordComparer (userPassword, dbPassword) {
    return bcrypt.compareSync(userPassword, dbPassword)
}

function tokenGenerator (payload) {
    console.log(payload)
    const token = jwt.sign(payload, PRIVATE_KEY)
    console.log(token)
    return token
}

function tokenDecoder (token) {
    const decoded = jwt.verify(token, PRIVATE_KEY)
    return decoded
}

module.exports = {
    passwordHasher,
    passwordComparer,
    tokenGenerator,
    tokenDecoder
}