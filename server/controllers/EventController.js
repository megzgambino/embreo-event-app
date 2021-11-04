const { Event, Date:Dates, User } = require('../models')

module.exports = class EventControllers {
    static showAllEvent(req, res) {
        Event.findAll({
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: Dates,
                },
                {
                    model: User,
                },
            ],
        })
        .then((events) => {
            res.status(200).json(events)
        })
        .catch(err => res.status(500).json(err))
    }

    static showEvent(req, res) {
        let { id } = req.params

        Event.findOne({
            where: {
                id
            },
            include: [
                {
                    model: Dates,
                },
            ],
        })
        .then((event) => {
            res.status(200).json(event)
        })
        .catch(err => res.status(500).json(err))
    }

    static createEvent(req, res) {
        let { name, dates, status, location, UserId } = req.body

        Event.create({
            name,
            dates,
            status,
            location,
            UserId
        })
        .then((event) => {
            
            Dates.create({
                EventId: event.id,
                dates: event.dates
            })
            
            res.status(201).json(event)  
        })
        .catch(err => res.status(500).json(err))
    }

    static updateStatus(req, res) {
        let { id, status } = req.body
 
        Event.update({status}, {
            where: {
                id
            }, returning: true
        })
        .then((event) => {
            res.status(200).json(event[1][0])
        })
        .catch(err => res.status(500).json(err))
    }

    static deleteEvent (req, res) {
        let { id } = req.params
        Event.destroy({
            where: {
                id
            }
        })
        .then((event) => {
            res.status(200).json({message: 'event has been deleted!'})
        })
        .catch(err => res.status(500).json(err))
    }
}
