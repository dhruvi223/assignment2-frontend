import { combineReducers } from "redux";
import { allproductReducer } from "./productReducer";
import { uploadImageReducer } from "./productReducer";
import { uploadThumbImageReducer } from "./productReducer";
import { getOneProductReducer } from "./productReducer";


const reducers = combineReducers({
     allproduct : allproductReducer,
     uploadImage : uploadImageReducer,
     uploadThumbImage : uploadThumbImageReducer,
     getOneProduct : getOneProductReducer
     
})

export default reducers;