var assert = require('assert');

exports.insertDocument = function(db, document, collection, callback){
    //get the document collection
    var coll = db.collection(collection);
    //insert documents
    coll.insert(document, function(err, result){
        assert.equal(err,null);
        console.log("Inserted " + result.result.n + " documents into the collection" + collection);
        callback(result);
    });
};

exports.findDocuments = function(db, collection, callback){
    //get the collection,
    var coll = db.collection(collection);

    //find some documents
    coll.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        callback(docs);
    });
};


exports.updateDocument = function(db, document, update, collection, callback){
    //get the collection
    var coll = db.collection(collection);

    //update document
    coll.updateOne(document, {$set: update}, null, function(err, result){
        assert.equal(err, null);
        console.log("Updated the document with " + update);
        callback(result);
    });
};

exports.removeDocument = function(db, document, collection, callback){
    //gets the collection
    var coll = db.collection(collection);

    // delete the document
    coll.deleteOne(document, function(err, result){
        assert.equal(err,null);
        console.log("Removed the document " + document);
        callback(result);
    });
};
