const { Router } = require("express");
const Company = require("../models/companies.model");
const Ads = require("../models/ads.model");

const company = Router();

company.get("/ad", async (req, res) => {
  try {
   
const searchTerm= req.query.q 

if(searchTerm){
const result = await Ads.aggregate([
  {
    $match: {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { primaryText: { $regex: searchTerm, $options: "i" } },
        { headline: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } }
      ]
    }
  }

]);

res.status(200).send({ mesg: "ok", data: result });
}
else{
  const result=await Ads.find({})
  res.status(200).send({mesg:"ok",data:result})
}



  } catch (err) {
    console.log("Error from get company ads route : ", err);
    res.status(500).send({ mesg: "Internal server error !" });
  }
});

company.get("/", async (req, res) => {
  try {
    const allCompany = await Company.find({});

    res.status(200).send({ mesg: "ok", companyData: allCompany });
  } catch (err) {
    console.log("Error from get company route : ", err);
    res.status(500).send({ mesg: "Internal server error !" });
  }
});

module.exports = company;
