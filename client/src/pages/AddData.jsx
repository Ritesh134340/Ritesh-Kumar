import React, { useState } from "react";
import AddCompanyData from "../components/AddCompanyData";
import AddAdsData from "../components/AddAdsData";
import { AddDataWrapper } from "../styles/addData.styled";

const AddData = () => {
  const [selected, setSelected] = useState("company");
 
  return (
    <AddDataWrapper selected={selected}>
        
      <div className="toggle-wrapper">
        <button onClick={() => setSelected("company")}>Add New Company</button>

        <button onClick={() => setSelected("add")}>Add New Add</button>
     
      </div>
      <div>
      {selected === "company" && <AddCompanyData />}
        {selected === "add" && <AddAdsData />}
      </div>
    </AddDataWrapper>
  );
};

export default AddData;
