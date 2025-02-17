import React, { FC, ReactNode, useReducer } from "react";
import CartContext from "./CartContext";
import { CartReducer, initialState } from "./CartReducer";

interface CartProviderType {
  children: ReactNode
};

const CartProvider: FC<CartProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;