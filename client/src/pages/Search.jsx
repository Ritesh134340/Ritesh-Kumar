import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { SearchWrapper } from "../styles/search.styled";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeSearchRequest } from "../redux/appRedux/action";
import Grid from "../components/Grid";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValue = searchParams.get("q") || "";
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const data=useSelector((state)=>state.appReducer.adsData)
  const loading=useSelector((state)=>state.appReducer.loading)

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ q: searchTerm });
      dispatch(makeSearchRequest(searchTerm));
    }
  };

  const handleClickSearch = (e) => {
    setSearchParams({ q: searchTerm });
    dispatch(makeSearchRequest(searchTerm));
  };

  useEffect(() => {
    let id;
    if (searchTerm !== "") {
      clearTimeout(id);
      id = setTimeout(() => {
        setSearchParams({ q: searchTerm });
        dispatch(makeSearchRequest(searchTerm));
     
      }, 500);
    }
    return () => {
      clearTimeout(id);
    };
  }, [searchTerm]);


  useEffect(()=>{
   
    dispatch(makeSearchRequest(searchTerm));
  },[])


  return (
    <SearchWrapper>
      <h3 className="search-head">Enter search keyword</h3>
      <div className="input-wrapper">
        <input
          type="search"
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleEnterSearch}
          placeholder="Enter your query"
        />
        <CiSearch className="search-icon" onClick={handleClickSearch} />
      </div>
     {loading ? <h3 style={{marginTop:"30px",textAlign:"center"}}>Searching...</h3> : <div>
        <Grid data={data}/>
      </div>}
     {( !loading && data.length===0) && <div style={{margin:"auto",textAlign:"center",marginTop:"30px"}}>
           <p style={{color:"gray",fontSize:"18px"}}>Data <span style={{color:"red"}}>not found !</span></p>
      </div>}
      <Link style={{textDecoration:"none"}} to="/"> <p className="back-btn">Back</p></Link>
    </SearchWrapper>
  );
};

export default Search;
