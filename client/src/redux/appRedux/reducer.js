import * as types from "./actionTypes";

const initialState = {
  loading:false,
  error:false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SEARCH_REQUEST:return {...state,loading:true,error:false}
    case types.SEARCH_SUCCESS:return {...state,loading:false,error:false}
    case types.SEARCH_FAILURE:return {...state,loading:false,error:true}

    default:
      return state;
  }
};

export { reducer };
