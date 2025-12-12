import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere provident", 
      body: "quia et suscipiti\nvitae recus"
    },
    {
      userId: 1,
      id: 2,
      title: "sunt aut facere provident",
      body: "quia et suscipiti\nvitae recus"
    }
  ],
  isFetching: true,
  error: null,
};

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

export const getPostsThunk = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    const data = await axiosInstance.get("/posts")
    console.log('data :>> ', data);
  }
);

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