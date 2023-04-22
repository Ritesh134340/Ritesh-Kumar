import styled from "styled-components";

export const AddDataWrapper=styled.div`

 .toggle-wrapper{
    display:flex;
    margin:auto;
    margin-top:50px;
    margin-bottom:30px;
    width:40%;
    justify-content:space-between;
    align-items:center;
 }
 .toggle-wrapper>button{
    padding:8px 15px;
    border:none;
    outline:none;
    cursor:pointer;
    font-weight:bold;
    font-size:16px;
    padding-bottom:12px;
   
 }
 .toggle-wrapper>button:nth-child(1){
   border-bottom:${(props)=>props.selected==="company" ? "3px solid #19376D" : ""};
  color:${(props)=>props.selected==="company" ? "#576CBC" : "black"};
  
 }
 .toggle-wrapper>button:nth-child(2){
    border-bottom:${(props)=>props.selected==="add" ? "3px solid #19376D" : ""};
    color:${(props)=>props.selected==="add" ? "#576CBC" : "black"};
  
}


@media all and (max-width:1024px) and (min-width:769px){
    .toggle-wrapper{
        width:60%;
    }
}


@media all and (max-width:768px) and (min-width:481px){
    .toggle-wrapper{
        width:65%;
        
    }
}

@media all and (max-width:480px) and (min-width:279px){
    .toggle-wrapper{
        width:95%;
        
    }
}

`
