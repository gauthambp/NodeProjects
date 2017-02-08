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
var db= mongoose.connection;
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
var port =5000;
//Specify a port to listen for express
app.listen(port,function(err){
 console.log('Running on port '+port);
});
