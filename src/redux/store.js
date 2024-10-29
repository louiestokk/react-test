import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import loadingReducer from './loading/loadingSlice'

export const store = configureStore({
    reducer: {
     user:userReducer,
     loading:loadingReducer
    }
  });