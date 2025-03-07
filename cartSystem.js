import { createSlice } from "@reduxjs/toolkit";

const cartSystem = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    quantity: 0,
  },
  reducers: {
    addCart: (state, action) => {

      state.cart.push(action.payload);
      state.quantity += 1;
    },
    removeFromCart:(state,action)=>{
      const { payload } = action;
      state.cart=state.cart.filter(item=>item.title!==payload.title);
      state.quantity-=1;
    }
  },
});

export const { addCart,removeFromCart } = cartSystem.actions;

export default cartSystem.reducer;

