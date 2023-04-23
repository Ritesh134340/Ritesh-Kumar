import * as types from "./actionTypes"
import axios from "axios"


export const makeSearchRequest=(payload)=>(dispatch)=>{
  dispatch({type:types.SEARCH_REQUEST})
  return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/company/ad/?q=${payload}`)
  .then((res)=>{
    return dispatch({type:types.SEARCH_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.SEARCH_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
  })
}


export const addCompany=(payload)=>(dispatch)=>{
  dispatch({type:types.ADD_COMPANY_REQUEST})
  return axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/add/company`,payload)
  .then((res)=>{
    return dispatch({type:types.ADD_COMPANY_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.ADD_COMPANY_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
  })
}


export const addAd=(payload)=>(dispatch)=>{
  dispatch({type:types.ADD_AD_REQUEST})
  return axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/add/ad`,payload)
  .then((res)=>{
    return dispatch({type:types.ADD_AD_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.ADD_AD_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
  })
}


export const getCompanyData=()=>(dispatch)=>{
  dispatch({type:types.GET_ALL_COMPANY_REQUEST})
  return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/company`)
  .then((res)=>{
   
    return dispatch({type:types.GET_ALL_COMPANY_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.GET_ALL_COMPANY_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
  })
}