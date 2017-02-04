var mongoose =require('mongoose')

//Genre schema. we can do validation
var genreSchema=mongoose.Schema({
 name:{
     type:String,
     required:true

 },
  create_date:{
     type:Date,
     default:Date.now

 }
});
//make the genre object accessible
var Genre=module.exports =mongoose.model('Genre',genreSchema);