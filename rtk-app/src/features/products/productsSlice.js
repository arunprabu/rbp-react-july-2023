import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  productList: [],
  product: {},
  status: 'idle'
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(state); // products feature data from store
      state.productList.push(action.payload);
    },
    fetchProducts: (state, action) => {
      state.productList = action.payload;
    }
  }
});

export const { add, fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const getProducts = () => {
  return async function getProductsAsync(dispatch, getState) {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch(fetchProducts(res.data));
  };
};