var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;




//lets create a schema! yay!
var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
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
    }
}, {
    timestamps: true
});


//now we create an EVIL Promotion model!
var Promotions = mongoose.model('Promotion',promoSchema);

//we will make the model public... another yay!
module.exports = Promotions;
