const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
        name:{
            type:String,
            required:[true, "Player must have a name!"],
            minlength: [2, "Name must be at least 3  characters!"],
            maxlength: [600, "Name must be less than 50 characters!"]
        },
        position:{
            type:String,
            required:[true, "Player must have a position!"],
            minlength: [2, "Name must be at least 3  characters!"],
            maxlength: [600, "Name must be less than 50 characters!"]
        }
}, {timestamps: true})
module.exports.Player = mongoose.model('Player', PlayerSchema);