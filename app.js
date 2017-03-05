//web framework for node.js
var express= require('express')
//Gives an instance of express
var app=express();
//Used for post request and forms
var bodyParser=require('body-parser');
//MongoDB Object modeling tool designed to work in asynchronous environment
var mongoose = require('mongoose');

mongoose.set('debug', true);

//Enable cors 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

Genre=require('./models/Genre');
//Company=require('./models/company');
Product=require('./models/product');

//connect to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce');
//log connection state
console.log(mongoose.connection.readyState);
//database Object
//Genre schema. we can do validation
var companySchema=mongoose.Schema({
 companyName:{
     type:String,
     required:true
  },
  location:{
     type:String
  }
});

//Creating a model using its schema
var Company= mongoose.model("companys",companySchema)

//Using find to fetch the collection
app.get('/api/Companys',function(req,res){
    Company.find({},function(req,companys){
    console.log(companys);
    //sends the response to the browser
    res.send(companys);
});
});

//Load the model for users
User=require('./models/user');
/**
 * 
 * GET
 */
//Using find to fetch all the users in the db
app.get("/api/Users",function(req,res){

//Get the filter query
  var query=req.query;
      User.find(query, function(err, user) {
      
           if (err)
                res.send(err);
            else
                res.send(user)
            //res.json(user);
        });
  });
  //Get specific record
  app.get("/api/Users/:_id",function(req,res){
        //Find based on ID
       User.findById(req.params._id, function(err, user) {
             if (err)
                res.send(err);
            else
                res.send(user)
            //res.json(user);
        });
  });
//Use bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/**
 * POST
 */
app.post('/api/Users',function(req, res) {
  var users = new User(req.body);
  //save users
   users.save(function(err) {
    //Check for error
    if (err) {
      return res.send(err);
    }
    else{
    console.log('Success');
    res.send(users)
    }
  });
  //res.send('Responding');*/
 });
 
 /**
  * PUT
*/
  app.put('/api/Users/:_id',function(req,res){
  //Get the filter query
  var query=req.query;
      User.findById(req.params._id, function(err, user) {
        if(err)
          {
            res.send(err);
            console.log(err)
          }
        //Update 
        else
        {
          user.firstName=req.body.firstName;
          user.lastName=req.body.lastName;
          user.save();
          res.json(user)
        }
    });
  });

var port =5000;
//Specify a port to listen for express
app.listen(port,function(err){
 console.log('Running on port '+port);
});
