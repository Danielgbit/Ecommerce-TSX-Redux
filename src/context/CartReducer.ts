    interface CartItem {
        id: number;
        name: string;
        quantity: number;
    };


    interface CartState {
        cartItems: CartItem[];
    }

    interface CartAction {
        type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
        payload?: CartItem;
      }

      export const initialState: CartState = {
        cartItems: [],
      };

    export const CartReducer = (state = initialState, action: CartAction) => {
        switch (action.type) {  // Debes acceder a `action.type` para determinar el tipo de acción
            case 'ADD_TO_CART': {

                if (!action.payload) return state; // ✅ Validación para evitar `undefined`

                const { id } = action.payload;

                const existingItem = state.cartItems.find((item) => item.id === id);

                if (existingItem) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity + 1 }  // Corregido: incrementar la cantidad
                                : item
                        )
                    };
                } else {
                    // Si el item no existe en el carrito, lo añadimos con cantidad 1
                    return {
                        ...state,
                        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
                    };
                }
            }


            case 'REMOVE_FROM_CART': {

                if (!action.payload) {
                    return state
                };

                const { id } = action.payload;

                // Filtramos los ítems para excluir el que tiene el ID proporcionado
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== id)
                };
            }

            case 'CLEAR_CART': {
                // Limpiamos todo el carrito
                return {
                    ...state,
                    cartItems: [] // Devolvemos un array vacío
                };
            }

            default:
                return state; // Si la acción no es reconocida, devolvemos el estado actual
        }        

    };