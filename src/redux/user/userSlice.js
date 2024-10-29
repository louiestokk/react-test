import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[]
  };


  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      dispatchUserData: (state, { payload }) => {
        state.user = payload;
      }
    }
  });

  export const { dispatchUserData } = userSlice.actions;
  export const getUserData = (state) => state.user;
  export default userSlice.reducer;