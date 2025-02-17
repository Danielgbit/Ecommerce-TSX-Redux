import { createContext } from "react";

const CartContext = createContext({
  state: { cartItems: [] }, // Valor por defecto del estado
  dispatch: () => {}, // Función por defecto de dispatch
});

export default CartContext;