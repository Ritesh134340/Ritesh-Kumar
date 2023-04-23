import * as types from "./actionTypes";

const initialState = {
  loading:false,
  error:false,
  companyData:[],
  adsData:[]
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SEARCH_REQUEST:return {...state,loading:true,error:false}
    case types.SEARCH_SUCCESS:return {...state,loading:false,error:false,adsData:payload.data}
    case types.SEARCH_FAILURE:return {...state,loading:false,error:true}

    case types.ADD_COMPANY_REQUEST:return {...state,loading:true,error:false}
    case types.ADD_COMPANY_SUCCESS:return {...state,loading:false,error:false}
    case types.ADD_COMPANY_FAILURE:return {...state,loading:false,error:true}


    case types.ADD_AD_REQUEST:return {...state,loading:true,error:false}
    case types.ADD_AD_SUCCESS:return {...state,loading:false,error:false}
    case types.ADD_AD_FAILURE:return {...state,loading:false,error:true}


    case types.GET_ALL_COMPANY_REQUEST:return {...state,loading:true,error:false}
    case types.GET_ALL_COMPANY_SUCCESS:return {...state,loading:false,error:false,companyData:payload.companyData}
    case types.GET_ALL_COMPANY_FAILURE:return {...state,loading:false,error:true}


    default:
      return state;
  }
};

export { reducer };
