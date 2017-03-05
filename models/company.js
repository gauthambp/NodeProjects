var mongoose =require('mongoose')

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
var Company=module.exports = mongoose.model("companys",companySchema)

//Get genreSchema. It would take a call back which would be entered through the route file
module.exports.getCompanies=function(callback,limit){
    Company.find(callback).limit(limit);

}
