// core stuff here
/* 
  1. initial state for the store of this feature,
  2. reducer functions 
  3. actions associated with reducer fns
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  userList: [],
  status: 'idle'
}

// Let's connect with the rest api for adding user
export const addUserAsync = createAsyncThunk(
  'users/addUser',
  async (formData) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      formData
    );
    return response.data;
  }
)

// Let's connect with the rest api 
export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  }
)

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        // state is store data
        state.status = "loading";
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        // state is store data
        state.status = "idle";
        state.isLoading = false;
        state.isError = false;
        state.userList = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        // state is store data
        state.status = "idle";
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addUserAsync.pending, (state) => {
        // state is store data
        state.status = "loading";
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        // state is store data
        state.status = "idle";
        state.isLoading = false;
        state.isError = false;
        state.userList = [...state.userList, action.payload];
      })
      .addCase(addUserAsync.rejected, (state) => {
        // state is store data
        state.status = "idle";
        state.isLoading = false;
        state.isError = true;
      });
  }
});

export default usersSlice.reducer;