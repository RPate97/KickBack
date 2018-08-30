/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

//import useful stuff
var express = require('express')
var bodyParser = require('body-parser')
var AWS = require('aws-sdk')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

//setup mongoDB vars
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');
let atlas_uri;
let cachedDb = null; //cache it yo
// Enable CORS for all methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    //create connection if needed
    var uri = process.env.MONGO_URI;
    if (atlas_uri == null) {
        atlas_uri = uri;
    }

    try { 
        if (cachedDb == null) { //if connection not cached
            MongoClient.connect(atlas_uri, { useNewUrlParser: true }, function (err, client) { //connect
                cachedDb = client.db('publicContent'); //cache db
                next() //go to next function to handle requests
            });
        }else{
            next() //if connection already established jump to next function
        }
    }
    catch (err) {
        console.error('an error occurred', err); //log errors, but cmon I don't get errors anyway
    }
});


AWS.config.update({ region: process.env.REGION })

//handle posting public posts
app.post('/publicPosts', function(req, res) {
    let json = JSON.parse(JSON.stringify(req.body)); //create json for database
    cachedDb.collection('publicPosts').insertOne( json, function(err, result) { //insert into collection of publicPosts
        if(err!=null) { //if error
            console.error("an error occurred in createDoc", err); //print
            res.json({success: 'post call failed!', body: JSON.stringify(err)}) //notify of error
        } 
        else { //if not error
            res.json({success: 'post call success!', body: json}) //notify of success
        }
    });
});

/*app.post('/publicPosts/getNearby', function(req, res){
    var postCollection = cachedDb.collection('publicPosts'); //get collection
    postCollection.aggregate([
        {
            $geoNear: {
                near: {type: "Point", coordinates: req.body.coords },
                maxDistance: 20000,
                spherical: true,
                distanceField: "distance",
                distanceMultiplier: 1/1609.34,
                num: 10
            }
        }
    ]).toArray((err, docs) => {
        if(err){
            console.error(err);
        }else{
            res.json({success: 'successfully pulled nearby posts', body: docs})
        }
    });
});*/

app.post('/publicPosts/getSortedNearby', function(req, res) {
    var postCollection = cachedDb.collection('publicPosts');
    let distance = req.body.searchDistance; //set distance to user specified
    let maxScore; //set score for filtering
    if(req.body.lastScore == -1){
        maxScore = 999999; //if passed score = -1 i.e there's nothing to filter set max really high
    }else{
        maxScore = req.body.lastScore; //otherwise setup var for filtering
    }
    postCollection.aggregate([
        {
            $geoNear: { //run geo near stage to get stuff nearby 
                near: { type: "Point", coordinates: req.body.coords }, 
                maxDistance: distance, //set distance to current searching distance in meters meters
                spherical: true, //search in a spherical area
                distanceField: "distance", //get distance (may want to remove this unless needed specifically for events)
                distanceMultiplier: 1/1609.34, //convert distance to miles
                //num: 50 //set fairly low max num to keep search time down (may result in missed posts need better optimization scheme)
            }
        },
        {
            $match: { //run match stage to filter out posts with score higher than passed score (for pages)
                score: {
                    $lt: maxScore //less than maxScore
                }
            }
        },
        {
            $sort: {
                score: -1, //sort by score decending
            }
        },
        {
            $limit: 20, //limit response to 10
        },
    ]).toArray((err, docs) => {
        if(err){
            console.error(err); //output error if needed
        }else{
            found = docs;
            res.json({success: 'successfully pulled nearby posts', body: found, distanceRequired: distance}); //respond with found docs
        }
    });
});

app.post('/publicPosts/vote', function(req, res){
    let realid = new mongo.ObjectID(req.body.postId); //get id of post and convert to objectID
    let updated = cachedDb.collection('publicPosts').findOneAndUpdate( 
        { "_id": realid }, //find and update specified post based on passed id
        { $inc: {"score": req.body.voteNum } }, //increment (or inc by -1) score to handle voting up and down
        function(err, doc){ //handle return
            if(err){
                res.json(err); //output error if needed
            }else{
                res.json({str: 'You voted good job!', newDoc: doc.value.score}); //return with score
            }
        }
    );
});


app.get('/publicPosts', function(req, res) {
    res.json(req.apiGateway)
});

//some other potential functions not used in client side code
app.post('/publicPosts/*', function(req, res) {
    // Add your code here
    res.json({success: 'post call success!', url: req.url, body: req.body})
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
