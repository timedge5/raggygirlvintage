import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DataState } from "../../common/interfaces";

// configure inital state as DataState type
const initialState: DataState = {
  cart: [],
  cart_quantity: 0,
  current_item: {
    id: "",
    type: "",
    value: "",
    price: "",
    description: "",
    images: [],
    name: "",
    item_quantity: 0,
  },
};

// create slice
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return (item.item_quantity = item.item_quantity + 1);
        }
      });
      state.cart = [...state.cart, action.payload];
      state.cart_quantity = state.cart_quantity + 1;
    },
  },
});

// export active actions
export const { setCart } = dataSlice.actions;

// export active state
export const CART = (state: RootState) => state.data.cart;
export const CART_QUANTITY = (state: RootState) => state.data.cart_quantity;
export const CURRENT_ITEM = (state: RootState) => state.data.current_item;

// export reducer as dataSlice
export default dataSlice.reducer;
