var mongoose = require('mongoose');
var assert = require('assert');

var Promotions = require('./models/promotions');

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
    Promotions.create({
        name: "MADAFAKAA! pizza!",
        description: "Test",
        image: "images/uthapizza.png",
        price: "$4.99"

    }, function(err, promotion){
        if (err) throw err;
        console.log('promotion created!');
        console.log(promotion);

        var id = promotion._id;

        // we will get all the promotions
        setTimeout(function(){
            Promotions.findByIdAndUpdate(id, {
                $set: { description: 'Updated test'}
            }, {
                new: true
            }).exec(function(err,promotion){
                if (err) throw err;
                console.log('Updated promotion');
                console.log(promotion);

                db.collection('promotions').drop(function () {
                    db.close();
                });


            });
        },3000);
    }
    );

});


