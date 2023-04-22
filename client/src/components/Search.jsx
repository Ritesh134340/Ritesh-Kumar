import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import {CiSearch} from "react-icons/ci"


const Search = () => {
    

    const [searchTerm,setSearchTerm]=useState("")

    const handleChange=(e)=>{
      setSearchTerm(e.target.value)
    }

  

    const handleEnterSearch=(e)=>{
      if(e.key==='Enter'){
        alert("run funcftion")
      }
    }

    const handleClickSearch=(e)=>{
       alert("run function")
    }

    useEffect(()=>{
      let id;
      if(searchTerm!==""){
       clearTimeout(id);
       id=setTimeout(() => {
        alert(searchTerm)
       }, 3000);
      }
      return ()=>{
        clearTimeout(id)
      }
    },[searchTerm])



  return (
    <SearchWrapper>
        <h3 className="search-head">Enter search keyword</h3>
        <div className="input-wrapper">
        <input type="search" className="search-input" onChange={handleChange} onKeyDown={handleEnterSearch}/>
        <CiSearch className="search-icon" onClick={handleClickSearch}/>
        </div>
        
    </SearchWrapper>
  )
}

const SearchWrapper=styled.div`
 margin:auto;
 margin-top:50px;

 .search-head{
  text-align:center;
  font-size:30px;
  font-weight:400;

 }

 .input-wrapper{
  display:flex;
  width:38%;
  margin:auto;
  align-items:center;
  border-radius:5px;
  border:1px solid gray;
  overflow:hidden;

 }
 .search-icon{
  font-size:30px;
  padding:0px 10px;
  cursor:pointer;
 }

 .search-input{
    height:45px;
    width:100%;
    outline:none;
    border:none;
    box-sizing:border-box;
    font-size:18px;
    padding-left:10px;
    padding-right:8px;
 }

 

 
`


export default Search