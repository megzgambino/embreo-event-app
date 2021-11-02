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
            // console.log(event.dates)
            Dates.create({
                EventId: event.id,
                dates: event.dates
            })
            // .then((date) => {
            //     console.log(date)
            // })
            

            res.status(201).json(event)  
        })
        .catch(err => res.status(500).json(err))
    }
}
