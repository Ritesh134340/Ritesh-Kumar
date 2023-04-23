const mongoose=require("mongoose");

const adsSchema=new mongoose.Schema({
    companyId:String,
    primaryText:String,
    headline:String,
    description:String,
    CTA:String,
    imageUrl:String
})


const Ads=mongoose.model("ad",adsSchema)

module.exports=Ads