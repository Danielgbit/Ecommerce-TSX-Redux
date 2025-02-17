import { createContext, Dispatch } from "react";
import { CartAction, CartState } from "./CartReducer";

interface CartContextType {
  state: CartState,
  dispatch: Dispatch<CartAction>
}

const CartContext = createContext({} as CartContextType);

export default CartContext;