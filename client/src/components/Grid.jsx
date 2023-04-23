import React from 'react'
import styled from "styled-components"

const Grid = ({data}) => {
 
  return (
    <GridWrapper>
      <div className="grid-container">
        {
            data && data.map((ele)=>{
                return <div className="card" key={ele._id}>
                       <div>
                       <img src={ele.imageUrl} alt="ad-image" className="card-image"/>
                       </div>
                    
                       <button>{ele.CTA}</button>
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
 .card{
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   border-radius:8px;
   padding:10px;

 }
 .card-image{
  width:100%;
 }
`

export default Grid