import React from "react";
import Search from "./Search";
import { HomeWrapper } from "../styles/home.styled";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <HomeWrapper>
        <h1 className="home-heading">Search Application</h1>
        <div className="home-main">
        <div className="add-btn-wrapper">
        <button className="add-data"><Link to="/search" style={{color:"white",textDecoration:"none",fontWeight:"bold"}}>SEARCH ADS</Link></button>
      </div>

      <div className="add-btn-wrapper">
        <button className="add-data"><Link to="/add/data" style={{color:"white",textDecoration:"none",fontWeight:"bold"}}>ADD DATA</Link></button>
      </div>
        </div>
     
    </HomeWrapper>
  );
};

export default Home;
