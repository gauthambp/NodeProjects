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

//Model for fetching users
var userSchema=mongoose.Schema({
    firstName:{
      type:String,
      required:true
    },
    lastName:{
      type:String
      
    }
});
//User Model
var User=mongoose.model("users",userSchema)

//Using find to fetch all the users in the db
app.get("/api/Users",function(req,res){
  User.find({},function (err,user){
    if(err)
    {
       console.log(err);
       res.send(err);
    }
    else
   {
     console.log(user);
    res.send(user);}
  });

});

//Using find to fetch all the users in the db
app.get("/api/Users/:_id",function(req,res){
      User.findById(req.params._id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
  });
//Use bodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Post
app.post('/api/Users',function(req, res) {
  var users = new User(req.body);
  
  //save users
   users.save(function(err) {
    if (err) {
      return res.send(err);
    }
    else{
    console.log('Success');
   }
  });
  //res.send('Responding');*/
  console.log(users);
  res.send(users);
});
var port =5000;
//Specify a port to listen for express
app.listen(port,function(err){
 console.log('Running on port '+port);
});
