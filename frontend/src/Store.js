import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': //add to cart, keep everything in the cart but add the new item
      return {
        ...state, //keep all values in the filed
        cart: {
          //for the cart object
          ...state.cart, //keep all previous values in the cart object, only update cartItems
          cartItems: [...state.cart.cartItems, action.payload], //keep previous items in the cart, add the new one
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
