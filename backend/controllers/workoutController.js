const Workout = require('../models/workoutmodel')
const mongoose = require('mongoose')
// get all workouts
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// Search workouts by title
const getWorkoutsByTitle = async(req, res) => {
    const { title } = req.query.title

    const workout = await Workout.find( { title : title } )
    
    if (!workout) {
        return res.status(404).json({error: 'No such workout, dummy'})
    }

    res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    console.log(req.body)
    // Add workout to the db
    try {
        const workout =  await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}
// delete a workout
const deleteWorkout = async(req, res) => {
    console.log("here")
    const { _id } = req.body
    console.log("now here")
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: 'No such workout, dummy'})
    }
    console.log("attempting to delete " + _id + " from database.")
    const workout = await Workout.findOneAndDelete( { _id : _id } )
    
    if(!workout){
        return res.status(404).json({error: 'No such workout, dummy'})
    }

    res.status(200).json(workout)
}

// update a workout 
const updateWorkout = async(req, res) => {
    const { _id, title, reps, load } = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({error: "ID " + _id + " is invalid."})
    }

    const workout = await Workout.findOneAndUpdate( { _id : _id }, {
        title : title, reps : reps, load : load
    })

    if(!workout){
        return res.status(404).json({error: 'Oopsie'})
    }

    res.status(200).json(workout)

}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkoutsByTitle,
    deleteWorkout,
    updateWorkout
}
