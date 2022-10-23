import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart").length > 0 
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
}

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (action, state) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const temp = {...action.payload, cartQuantity: 1}
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} adicionado ao carrinho`)
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    }
  }
});

export const { setOpenCart, setCloseCart, setAddItemToCart } = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export default CartSlice.reducer; 