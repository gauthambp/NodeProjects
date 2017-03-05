var mongoose =require('mongoose')
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
module.exports=mongoose.model('User',userSchema)