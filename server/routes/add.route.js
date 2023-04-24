const  {Router} = require("express");
const Company=require("../models/companies.model")
const Ads=require("../models/ads.model")

const   add=Router()

add.post("/company",async(req,res)=>{
    try{
    const newCompany= new Company(req.body)
    await newCompany.save()
    res.status(200).send({mesg:"Company added successfully !"})
    }
    catch(err){
     console.log("Error from add company route : ",err)
     res.status(500).send({mesg:"Internal server error !"})
    }
  
})

add.post("/ad",async(req,res)=>{
   try{
      
      const payload={...req.body}
      

      const comp=await Company.findOne({_id:payload.companyId}) 

      payload.name=comp.name;
      payload.url=comp.url;
  
      const newAd=new Ads(payload);

      await newAd.save()
      res.status(200).send({mesg:"Ad created successfully !"})
   }
   catch(err){
    console.log("Error from add new ads route : ",err)
    res.status(500).send({mesg:"Internal server error !"})
   }
})



module.exports=add