var mongoose =require('mongoose')

//Genre schema. we can do validation
var productSchema=mongoose.Schema({
 productName:{
     type:String
  },
  productCode:{
     type:String
  }
});
//Creating a model using its schema
var Product=mongoose.model('Product',productSchema);
//Make this available to users in node applications
module.exports=Product;



