import * as types from "./actionTypes"
import axios from "axios"


export const makeSearchRequest=(payload)=>(dispatch)=>{
  dispatch({type:types.SEARCH_REQUEST})
  return axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/search/q=${payload}`)
  .then((res)=>{
    return dispatch({type:types.SEARCH_SUCCESS,payload:res.data,status:res.status})
  })
  .catch((err)=>{
    return dispatch({type:types.SEARCH_FAILURE,mesg:err.response.data.mesg,status:err.response.status})
  })
}