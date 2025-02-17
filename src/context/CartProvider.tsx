import React, { useReducer } from "react";
import CartContext from "./CartContext";
import { CartReducer, initialState } from "./CartReducer";

const CartProvider: React.FC = ({ children }) => {
  // Usa useReducer para manejar el estado y las acciones
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;