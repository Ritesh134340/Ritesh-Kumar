import React, { useState } from "react";
import AddCompanyData from "../components/AddCompanyData";
import AddAdsData from "../components/AddAdsData";
import { AddDataWrapper } from "../styles/addData.styled";
import {Link} from "react-router-dom"
const AddData = () => {
  const [selected, setSelected] = useState("company");
 
  return (
    <AddDataWrapper selected={selected}>
        
      <div className="toggle-wrapper">
        <button onClick={() => setSelected("company")}>Add New Company</button>

        <button onClick={() => setSelected("add")}>Add New Ads</button>
     
      </div>
      <div>
      {selected === "company" && <AddCompanyData />}
        {selected === "add" && <AddAdsData />}
      </div>
     <Link style={{textDecoration:"none"}} to="/"> <p className="back-btn">Back</p></Link>
    </AddDataWrapper>
  );
};

export default AddData;
