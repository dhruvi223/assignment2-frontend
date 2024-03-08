import axios from 'axios'
import { ActionTypes } from '../constants/action-types'
import toast from 'react-hot-toast'

export const allProduct = (setData) => {
    return async (dispatch) => {
        dispatch({ type: ActionTypes.FETCH_ALL_PRODUCTS });
        try {
            const response = await axios.get(
              "http://localhost:8000/products"
            );
            if (!response.data) {
              throw new Error("Failed to fetch data");
            }
            console.log(response);
            setData(response.data); 
          } catch (error) {
            throw error;
          }
    }
}



export const uploadImage = (thumbfile, title) => {
    return async (dispatch) => {
      dispatch({ type: ActionTypes.UPLOAD_IMAGE });
  
      try {
        const formData = new FormData();
        formData.append("image", thumbfile);
        formData.append("title", title);
        console.log(formData);
        const response = await axios.post(
          "http://localhost:8000/uploadimage",
          formData
        );
  
        if (!response.data) {
          throw new Error("Failed to upload image");
        }
  
        const res = response.data;
      } catch (error) {
        throw error;
      }
    };
  };


  export const uploadThumbImage = (file, title) => {
    return async (dispatch) => {
      dispatch({ type: ActionTypes.UPLOAD_THUMB_IMAGE });
  
      try {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("title", title);
        console.log(formData);
  
        const response = await axios.post(
          "http://localhost:8000/uploadthumbimage",
          formData
        );
  
        if (!response.data) {
          throw new Error("Failed to upload image");
        }
  
        const res = response.data;
      } catch (error) {
        throw error;
      }
    };
  };



  export const getOneProduct = (id, setData) => {
    return async (dispatch) => {
      dispatch({ type: ActionTypes.FETCH_ONE_PRODUCT });
      console.log('called');
      try {
        const response = await axios.get(
          `http://localhost:8000/products/${id}`
        );
        if (!response.data) {
          throw new Error("Failed to fetch data");
        }
        console.log(response);
        setData([response.data]); 
      } catch (error) {
        throw error;
      }
    };
  };