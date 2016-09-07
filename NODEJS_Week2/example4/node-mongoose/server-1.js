var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./models/dishes-1');

//Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
//db client
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    // We were granted access to the db
    console.log("connected correctly to the database CONFUSION yay!");

    //create a new document
    var newDish = Dishes({
        name: 'Madafakin pizza!',
        description: 'Madafakin fake description'
    });

    //saving document
    newDish.save(function(err){
        if (err) throw err;
        console.log('Dish created');

        // get all the dishes
        Dishes.find({}, function(err, dishes){
            if (err) throw err;
            console.log(dishes);

            //dropping collection
            db.collection('dishes').drop(function(){
                db.close;
            });
        });
    });
});


