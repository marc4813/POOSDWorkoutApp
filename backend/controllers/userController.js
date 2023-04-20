const User = require('../models/user')
const mongoose = require('mongoose')


// get a single user
const getUser = async(req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No user found'})
    }

    const user = await User.findById(id)
    
    if (!user) {
        return res.status(404).json({error: 'No user found'})
    }

    res.status(200).json(user)
} 

// create a new user
const createUser = async (req, res) => {
    const {firstName, lastName, email} = req.body

    // Add document to the db
    try {
        const user =  await User.create({firstName, lastName, email})
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}
// delete a user
const deleteUser = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No user found'})
    }

    const user = await Workout.findOneAndDelete({_id: id})
    
    if(!user){
        return res.status(404).json({error: 'No user found})
    }

    res.status(200).json(user)
}

// update a user info 
const updateUser = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No user found'})
    }

    const user = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user){
        return res.status(404).json({error: 'No user found'})
    }

    res.status(200).json(user)

}

module.exports = {
    createUser,
    getUser,
    deleteUser,
    updateUser
}
