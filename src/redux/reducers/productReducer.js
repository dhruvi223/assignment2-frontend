import { ActionTypes } from "../constants/action-types";

const initialState = {
   products: [],
};
export const allproductReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.FETCH_ALL_PRODUCTS:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };


  export const uploadImageReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.UPLOAD_IMAGE:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };


  export const uploadThumbImageReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.UPLOAD_THUMB_IMAGE:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };


  export const getOneProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.FETCH_ONE_PRODUCT:
        return {
          ...state,
          loading: true,
        };
      default:
        return state;
    }
  };