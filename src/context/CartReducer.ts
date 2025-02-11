export const initialState = {
    cartItems: []
}

export const cartReducer = (state, action) => {
    switch(action) {
        case 'ADD_TO_CART': {
            const { id } = action.payload
        }

        const existingItem = state.cartItems.find((item) => item.id === id);

        if (existingItem) {
            return {
                ...state
            }
        }
    }
};