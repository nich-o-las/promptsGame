const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    participant: {
        type: String,
        score: Number,
        avatar: String,
        position: Number,
        eliminated: Boolean
    },
    round: {
        question: String,
        response: Array,
            

    }
 
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
