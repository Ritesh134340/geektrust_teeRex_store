import * as types from "./actionTypes";
import axios from "axios"


export const getProduct=()=>(dispatch)=>{
    dispatch({type:types.PRODUCT_REQUEST})
   return axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json ").then((res)=>{
    return dispatch({type:types.PRODUCT_SUCCESS,payload:res.data})
   }).catch((err)=>{
    dispatch({type:types.PRODUCT_FAILURE})
   })

}

export const searchFilter=(payload)=>(dispatch)=>{
    dispatch({type:types.SEARCH_FILTER,payload:payload})
}


export const boxFilter=(payload)=>(dispatch)=>{
    dispatch({type:types.CHECK_FILTER,payload:payload})
}

export const itemCounter=(payload)=>(dispatch)=>{
    dispatch({type:types.ITEM_COUNT,payload:payload})
}