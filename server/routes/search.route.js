const  {Router} = require("express");
const Company=require("../models/companies.model")
const Ads=require("../models/ads.model")

const search=Router()

search.get("/",(req,res)=>{
    
    res.send({mesg:"Search success"})
})

module.exports=search