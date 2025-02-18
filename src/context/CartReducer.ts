import { CartProduct } from "../interface";

export interface CartState {
    cartItems: CartProduct[]
}

export interface CartAction {
    type: 'ADD_TO_CART' | 'REMOVE_FROM_CART'| 'CLEAR_CART',
    payload: CartProduct
}

export const initialState: CartState = {
  cartItems: [],
};


export const CartReducer = (state: CartState, action: CartAction ): CartState => {
  switch (
    action.type // Debes acceder a `action.type` para determinar el tipo de acción
  ) {
    case "ADD_TO_CART": {
      if (!action.payload) return state; // ✅ Validación para evitar `undefined`

      const { id } = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 } // Corregido: incrementar la cantidad
              : item
          ),
        };
      } else {
        // Si el item no existe en el carrito, lo añadimos con cantidad 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case "REMOVE_FROM_CART": {
      if (!action.payload) {
        return state;
      }

      const { id } = action.payload;

<<<<<<< HEAD
      const product = state.cartItems.find((item) => item.id === id);
      
      if (!product) {
        return state
=======
      const product = state.cartItems.find((product) =>  product.id === id);

      if (!product) {
        return state;
>>>>>>> e3f2ce01e6ef3a35679a4b80cef5a7333d0ffb34
      };

      const updateProduct = {
        ...product,
        quantity: product.quantity - 1
      }

<<<<<<< HEAD
      // Si la cantidad llega a 0, eliminamos el producto del carrito

      const updateCartProducts = updateProduct.quantity <= 0 
        ? 
          state.cartItems.filter((item) => {
            item.id !== id
          }) 
        : 
        state.cartItems.map((item) => 
          { 
            item.id === id ? updateProduct : item 
          });
      
      

      // Filtramos los ítems para excluir el que tiene el ID proporcionado
      return {
        ...state,
        cartItems: updateCartProducts
=======
      const cartProductUpdate = product.quantity <= 1 
      ? 
        state.cartItems.filter((item) => item.id !== id)
      :
        state.cartItems.map((item) => item.id === id ? updateProduct : item);



      return {
        ...state,
        cartItems: cartProductUpdate
>>>>>>> e3f2ce01e6ef3a35679a4b80cef5a7333d0ffb34
      };
    }

    case "CLEAR_CART": {
      // Limpiamos todo el carrito
      return {
        ...state,
        cartItems: [], // Devolvemos un array vacío
      };
    }

    default:
      return state; // Si la acción no es reconocida, devolvemos el estado actual
  }
};
