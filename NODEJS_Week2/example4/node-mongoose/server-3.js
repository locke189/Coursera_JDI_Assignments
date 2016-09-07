var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./models/dishes-3');

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
    Dishes.create({
        name: "MADAFAKAA! pizza!",
        description: "Test",
        comments: [
            {
                rating: 3,
                comment: 'WTF',
                author: 'Juan Insuasti'
            }
        ]

    }, function(err, dish){
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);

        var id = dish._id;

        // we will get all the dishes
        setTimeout(function(){
            Dishes.findByIdAndUpdate(id, {
                $set: { description: 'Updated test'}
            }, {
                new: true
            }).exec(function(err,dish){
                if (err) throw err;
                console.log('Updated dish');
                console.log(dish);

                dish.comments.push({
                    rating: 5,
                    comment: "this is fakafaka",
                    author: "Juan Imbarachi"
                });

                dish.save(function(err, dish){
                    if (err) throw err;
                    console.log('Updated Comments');
                    console.log(dish);
                    db.collection('dishes').drop(function () {
                        db.close();
                    });
                });

            });
        },3000);
    }
    );

});


