import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import { addAd } from '../redux/appRedux/action';
import {useDispatch,useSelector} from "react-redux"
import { getCompanyData } from "../redux/appRedux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from './Loading';

const AddAdsData = () => {
const [companyId, setCompanyId] = useState("")
const [primaryText, setPrimaryText] = useState("")
const [headline, setHeadline] = useState("")
const [description, setDescription] = useState("")
const [cta, setCta] = useState("")
const [imageUrl, setImageUrl] = useState("")

const dispatch=useDispatch()

const loading=useSelector((state)=>state.appReducer.loading)
const data=useSelector((state)=>state.appReducer.companyData)

  const handleAddData=(e)=>{
    e.preventDefault();
   if(companyId&&primaryText&&headline&&description&&cta&&imageUrl){
    dispatch(addAd({companyId:companyId,primaryText:primaryText,headline:headline,description:description,CTA:cta,imageUrl:imageUrl}))
    .then((res)=>{
    if(res.status===200){
      toast.success(res.payload.mesg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setPrimaryText("")
      setDescription("")
      setCta("")
      setImageUrl("")
      setHeadline("")
      setCompanyId("")
    }
    else{
      toast.error(res.mesg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    })
    
   }
   else{
    toast.error("All fields required !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
   }

    
   }

   useEffect(()=>{
    if(data.length===0){
     dispatch(getCompanyData())
    }
 },[])

 

  return (
   loading ? <Loading/> : <AdWrapper>
      <form className="form">
        <select value={companyId} className="company-select" onChange={(e)=>setCompanyId(e.target.value)}>
         <option value="#">Select</option>
         {
          data && data.map((ele)=>{
           return  <option value={ele._id} key={ele._id}>{ele.name}</option>
          })
        
         }
        </select><br/>


        <label>Primary Text</label><br/>
        <input  type="text" placeholder='Enter primary text' value={primaryText} onChange={(e)=>setPrimaryText(e.target.value)}/><br/>


        <label>Headline</label><br/>
        <input type="text" placeholder='Enter company headline' value={headline} onChange={(e)=>setHeadline(e.target.value)}/><br/>

        <label>Description</label><br/>
        <input type="text" placeholder='Enter company description' value={description} onChange={(e)=>setDescription(e.target.value)}/><br/>


        <label>CTA</label><br/>
        <input type="text" placeholder='Enter cta value' value={cta} onChange={(e)=>setCta(e.target.value)}/><br/>


        <label>Image Url</label><br/>
        <input type="text" placeholder='Enter image url' value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/><br/>

        <button onClick={handleAddData}>Submit</button>
      </form>
      <ToastContainer/>
    </AdWrapper>
  )
}


const AdWrapper=styled.div`
  width:35%;
  margin:auto;
  border-radius:8px;
  margin-top:50px;
  background-color:white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding:28px 25px  25px 25px;
  margin-bottom:50px;
  .company-select{
   padding:8px 15px;
   border-radius:5px;
   margin-bottom:20px;
   outline:none;
   font-size:17px;
  }
  .form{
    margin:auto;
   
  }

  .form>input{
   width:100%;
   height:38px;
   border-radius:5px;
   border:1px solid gray;
   padding-left:10px;
   outline:none;
   margin-top:8px;
   margin-bottom:15px;
   box-sizing:border-box;
   &:focus{
    border:2px solid blue
   }
  }
  .form>label{
    font-size:15px;
  }
  .form>button{
    padding:8px 15px;
    border-radius:4px;
    margin-top:30px;
    cursor:pointer;
    border:none;
    outline:none;
    color:white;
    background-color:#19376D;
    font-weight:bold;
    font-size:16px;
  }
  @media all and (max-width:1024px) and (min-width:769px){
    width:55%;
 
}


@media all and (max-width:768px) and (min-width:481px){
  width:55%;
}

@media all and (max-width:480px) and (min-width:279px){
  width:83%; 
}
`

export default AddAdsData