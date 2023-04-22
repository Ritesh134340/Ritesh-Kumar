const mongoose=require("mongoose");

const companySchema=new mongoose.Schema({
   name:String,
   url:String
})


const Company=mongoose.model("company",companySchema)

module.exports=Company