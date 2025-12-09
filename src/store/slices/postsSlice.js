import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isFetching: true,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setActions(state, action) {
      console.log(state, action);
    },
  },
});


const { reducer, actions } = postsSlice;
export const { setActions } = actions;
export default reducer;