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

app.post('/publicPosts/getNearby', function(req, res){
    var postCollection = cachedDb.collection('publicPosts'); //get collection
    /*postCollection.find( //find nearby stuff from user location
        { 'location.coordinates':
          { $near :
            { $geometry:
              { type: "Point",  coordinates: req.body.coords },
                $maxDistance: 20000,
                //distanceField: 'distance'
            }
          }
        }
    ).limit(10).toArray(function(err, docs) { //limit results to 10 and place in array
        console.log("Found the following records");
        console.log(docs);
        res.json({success: 'successfully pulled nearby posts', body: docs})
    }); */
    postCollection.aggregate([
        {
            $geoNear: {
                near: {type: "Point", coordinates: req.body.coords },
                minDistance: req.body.lastDist,
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
