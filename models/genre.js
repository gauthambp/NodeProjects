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

//Get genreSchema. It would take a call back which would be entered through the route file
module.exports.getGenres=function(callback,limit){
    Genre.find(callback).limit(limit);

}
