var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//lets create a schema! yay!
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
}, {
    timestamps: true
});


//now we create an EVIL Dish model!
var Dishes = mongoose.model('Dish',dishSchema);

//we will make the model public... another yay!
module.exports = Dishes;
