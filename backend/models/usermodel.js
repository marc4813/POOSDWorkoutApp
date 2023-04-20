const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    
}, {timestamps: true}) //IDK if this line is right!!!

module.exports = mongoose.model('User', userSchema)
