var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;




//lets create a schema! yay!
var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});


//now we create an EVIL Promotion model!
var Leaders = mongoose.model('leader',leaderSchema);

//we will make the model public... another yay!
module.exports = Leaders;
