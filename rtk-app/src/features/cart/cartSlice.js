import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  productList: [],
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state); // cart feature data from store
      state.productList.push(action.payload);
    }
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
