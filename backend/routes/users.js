const { response } = require('express')
const express = require('express')
const {
    createUser,
    getUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')



const router = express.Router()

// GET a user
router.get('/:id', getUser)

// POST a user
router.post('/', createUser)

// DELETE a workout
router.delete('/:id', deleteUser)

// UPDATE a workout
router.patch('/:id', updateUser)

module.exports = router
