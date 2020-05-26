const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({ 
    company: { 
        type: String, 
        lowercase: true, 
    }, 
    qty: { 
        type: Number, 
        required: true
    }, 
    value: { 
        type: Number, 
        required: true
    }, 
    booth: { type: String }
})

module.exports = mongoose.model("User", userSchema) 