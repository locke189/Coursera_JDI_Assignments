var mongoose = require('mongoose');
var assert = require('assert');

var Leaders = require('./models/Leaders');

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
    Leaders.create({
       name: "Peter Pan",
       image: "images/alberto.png",
       designation: "Chief Epicurious Officer",
       abbr: "CEO",
       description: "Our CEO, Peter, . . ."

    }, function(err, leader){
        if (err) throw err;
        console.log('leader created!');
        console.log(leader);

        var id = leader._id;

        // we will get all the Leaders
        setTimeout(function(){
            Leaders.findByIdAndUpdate(id, {
                $set: { description: 'Updated test'}
            }, {
                new: true
            }).exec(function(err,leader){
                if (err) throw err;
                console.log('Updated leader');
                console.log(leader);

                db.collection('leaders').drop(function () {
                    db.close();
                });


            });
        },3000);
    }
    );

});


