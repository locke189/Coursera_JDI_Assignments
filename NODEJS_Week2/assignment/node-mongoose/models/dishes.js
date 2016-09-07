var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;




//comment schema sub-document!
var commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//lets create a schema! yay!
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    comments:[commentSchema]
}, {
    timestamps: true
});


//now we create an EVIL Dish model!
var Dishes = mongoose.model('Dish',dishSchema);

//we will make the model public... another yay!
module.exports = Dishes;
