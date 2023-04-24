import React from 'react'
import styled from "styled-components"

const Grid = ({data}) => {

  return (
    <GridWrapper>
      <div className="grid-container">
        {
            data && data.map((ele)=>{
                return <div className="card" key={ele._id}>
                        <a className="anchor" href={ele.url} target="_blank">
                       <div>
                       <img src={ele.imageUrl} alt="ad-image" className="card-image"/>
                       </div>
                       <h2 className="comp-name">{ele.name}</h2>
                       <div className="cta-btn">{ele.CTA}</div>
                       </a>
                        </div>
            })
        }
      </div>
    </GridWrapper>
   
  )
}

const GridWrapper=styled.div`


 .grid-container{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:50px 30px;
  width:85%;
  margin:auto;
  margin-top:50px;

 }
 .comp-name{
  text-align:center;
  margin-top:15px;

 }
 .anchor{
  color:black;
  text-decoration:none;
 }
 .cta-btn{
  text-align:center;
  width:100%;
  margin:auto;
  padding:5px 0px;
  background-color:teal;
  color:white;
  border-radius:5px;
  font-size:16px;
  display:inline-block;
  cursor:pointer;
  margin-top:20px;
  margin-bottom:30px;

  
 }
 .card{
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   border-radius:8px;
   padding:10px;

 }
 .card-image{
  width:100%;
  min-height:300px;
  max-height:300px;
 }

 @media all and (max-width:1024px) and (min-width:769px){
  .grid-container{
  grid-template-columns:repeat(2,1fr);
  width:90%;
 }
 
}


@media all and (max-width:768px) and (min-width:481px){
  .grid-container{

  grid-template-columns:repeat(2,1fr);
  width:90%;

 }
}

@media all and (max-width:480px) and (min-width:279px){
  .grid-container{
  grid-template-columns:repeat(1,1fr);
  width:97%;
 }
}
`

export default Grid