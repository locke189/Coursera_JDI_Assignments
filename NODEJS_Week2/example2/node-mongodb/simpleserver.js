var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


//Connection

url='mongodb://localhost:27017/conFusion';

MongoClient.connect(url, function(err,db) {
    //connection check
    assert.equal(err,null);
    console.log("connected to MongoDB - conFusion Schema");

    //Insert a new document in dishes collection
    var collection = db.collection("dishes");
    collection.insertOne({name:"Uthapizza", description:"test"}, function (err,result){
        assert.equal(err,null);
        console.log("After insert:");
        console.log(result.ops);

        //reading all documents
        collection.find({}).toArray(function(err,docs){
            assert.equal(err,null);
            console.log("Found: ");
            console.log(docs);

            //dropping collection
            db.dropCollection("dishes", function (err, result) {
                assert(err,null);
                db.close();
            });
        });

    });
});
