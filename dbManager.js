const MongoClient = require('mongodb').MongoClient;
var getID = require('mongodb').ObjectID();
var url = "mongodb://127.0.0.1:27017/";
let database = {};
//https://stackoverflow.com/questions/61277898/useunifiedtopology-true-pass-deprecated
let mongoClient = MongoClient(url,{ useUnifiedTopology: true });
let FinalProject; //let provides closure, so only one local copy of our db. Th
//functionally makes this static (one copy for all instances)

//you can call connect in your code, but it is not advised, it is safer to use
//"get" to initialize and use connections.
var connect = async function(FinalProject){
    try{
	await mongoClient.connect();
//	await mongoClient.db("admin").command({ ping: 1 });

	FinalProject=mongoClient.db(FinalProject);
	
	if (!FinalProject){
	    throw new Error("DB Connection Failed to start!");
	}
	else{
	    console.log(`Connected to ${FinalProject}`);
	    return FinalProject;
	}
    } catch(e){
	console.log(e.message);
    }
}
//Call get("<name_of_your_DB"> to initialize the db connection
//after that you can can call get() to just get the connection anywhere
database.get = function(FinalProject){
    if (FinalProject){
	//	console.log("Already connected!");
	return (FinalProject);
    }
}
//call close in your apps when you want to close the DB connection
database.close = async function(){

    try{
	await mongoClient.close();
	return;
    } catch(e){
	console.log(e.message);
    }
 }
    
module.exports = database;