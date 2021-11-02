const { tokenDecoder } = require('../helpers/index')
const { User, Event, Event } = require('../models')


function authentication (req, res, next) {
    const { access_token } = req.headers

    if (!access_token) return next({error : 'No Access Token'})

    try {
        const decodedToken = tokenDecoder(access_token)

        User.findByPk(decodedToken.id)
            .then((user) => {
                if (!user) {
                    throw {error : 'Invalid token'}
                } else {
                    req.currentUser = {
                        id : user.id
                    }
                    next()
                }
            })
            .catch(err => {
                next(err)
            })

    } catch (err) { 
        next(err)
    }
}


function authorization (req, res, next) {
    const id = +req.params.id
    
    Event.findByPk(id)
    .then((event) => {
        // console.log(Event)
        if (!event) {
            throw {error: 'Event not found'}
        } else {
            if (event.UserId === req.currentUser.id) {
                next()
            } else {
                throw {error: 'Authorization Error'}
            }
        }
    })
    .catch(err => {
        // next(err)
        console.log(err)
    })
}

function isAdmin (req, res, next) {
    const decodedToken = tokenDecoder(req.headers.access_token)
    const userRole = decodedToken.type

    if (userRole === 'Vendor') {
        next()
    } else {
        throw {error: 'Authorization Error'}
    }
}


module.exports = {
    authentication,
    authorization,
    isAdmin
}