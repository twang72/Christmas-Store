import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [], //cartItems come from local storage, otherwise it's empty.
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': //add to cart, keep everything in the cart, add new item
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); //convert cartItems to string and save it to key 'cartItems' in local storage.
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      ); //if the item id doesn't equal to current id, return it; otherwise remove it.
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    } //use a {} here to not to mix with previous case's cartItems
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
