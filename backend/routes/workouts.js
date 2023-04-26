const { response } = require('express')
const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkoutsByTitle,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()

// GET all workouts
router.get('/',getWorkouts)

// GET a single workout
router.get('/search', getWorkoutsByTitle)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/', deleteWorkout)

// UPDATE a workout
router.patch('/', updateWorkout)

module.exports = router
