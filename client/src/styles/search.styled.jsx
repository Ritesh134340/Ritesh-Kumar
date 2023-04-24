import styled from "styled-components"

export const SearchWrapper=styled.div`
 margin:auto;
 margin-top:30px;
 margin-bottom:40px;

 .search-head{
  text-align:center;
  font-size:30px;
  font-weight:600;
  margin-bottom:30px;
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

 .back-btn{
    margin:auto;
    border:2px solid red;
    text-align:center;
    margin-top:30px;
    margin-bottom:50px;
    cursor:pointer;
    border:1px solid gray;
    font-weight:bold;
    border-radius:5px;
    background-color:red;
    width:100px;
    padding-top:5px;
    padding-bottom:5px;
    color:white;
 }

 
 @media all and (max-width:1024px) and (min-width:769px){
 .input-wrapper{
   width:60%;
 }
 
}


@media all and (max-width:768px) and (min-width:481px){
   .input-wrapper{
   width:60%;
 }
}

@media all and (max-width:480px) and (min-width:279px){
   .input-wrapper{
   width:90%;
 }

 
`