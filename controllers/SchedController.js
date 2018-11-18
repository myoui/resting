const Schedule = require('../models/Schedule')

exports.getAllSchedule = (req, res) => {
    let today = new Date()
    Schedule.find(
        {'year': today.getFullYear(), 'month':today.getMonth()+1}).sort('day').exec((err, schedule) => {
        if (err) {
            res.status(404).send(err)
        }
        res.status(200).send(schedule)
    })
}
exports.getDaySchedule = (req, res) => {
    Schedule.findOne({date: req.params.date}, (err, schedule) => {
        if (err) {
            res.status(404).send(err)
        } else if (!schedule) {
            res.status(404).send({message:"Date not found!"})
        } else {
            res.status(200).send(schedule)
        }
    })
}

exports.getMonthSchedule = (req, res) => {
    Schedule.find({year: parseInt(req.params.year, 10), month: parseInt(req.params.month, 10)})
        .sort("day").exec((err, schedules) =>{
            if (err) {
                res.status(404).send(err)
            } 
            res.status(200).send(schedules)
        })
}

exports.addSchedule = (req, res) => {
    Schedule.replaceOne({date: req.body.date}, req.body, {upsert: true}, (err, schedule) =>{
        if (err) {
            res.status(500).send(err)
        }
        res.status(201).send(schedule)
    })
}

exports.removeSchedule = (req, res) => {
    Schedule.deleteOne({date: req.params.date}, (err, schedule) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).send({message:"Item deleted."})
    })
}

exports.deleteAllSchedule = (req, res) => {
    Schedule.deleteMany({}, (err, schedule) => {
        if (err) {
            res.status(500).send(err)
        }
        res.status(200).send({message:"All schedules deleted."})
    })
}