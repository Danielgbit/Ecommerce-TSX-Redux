import { createContext, Dispatch } from "react";

interface CartState {
  dispatch: Dispatch<{ type: string; payload?: any }>;
}

const defaultCartState: CartState = {
  dispatch: () => {
    throw new Error("CartContext debe ser usado dentro de un CartProvider");
  }
};

const CartContext = createContext<CartState>(defaultCartState); 

export default CartContext;
