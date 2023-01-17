import React from "react";
import * as types from "./actionTypes";

const data=JSON.parse(localStorage.getItem("cartItems"))|| [];

const initialCount=data.length

const initialState = {
  loading: false,
  product: [],
  searchFilter: [],
  checkFilter:[],
  error: false,
  itemCount:initialCount
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.PRODUCT_REQUEST:
      return { ...state, loading: true, error: false };

    case types.PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
        searchFilter: payload,
        checkFilter:payload,
        loading: false,
        error: false,
      };

    case types.PRODUCT_FAILURE:
      return { ...state, loading: false, error: true };

    case types.SEARCH_FILTER:
      return { ...state, searchFilter: payload,checkFilter:payload };

      case types.CHECK_FILTER:
        return { ...state, checkFilter: payload };

        case types.ITEM_COUNT: return {...state,itemCount:payload}

    default:
      return state;
  }
};

export default reducer;
