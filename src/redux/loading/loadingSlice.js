import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false
  };

  const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
      dispatchIsLoading: (state, { payload }) => {
        state.loading = payload;
      }
    }
  });

  export const { dispatchIsLoading } = loadingSlice.actions;
  export const getLoadingState = (state) => state.loading;
  export default loadingSlice.reducer;
