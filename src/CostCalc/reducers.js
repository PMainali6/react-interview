export const initialState = {
    products: [],
    cart: []
}

const reducers = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'ADD_TO_CART': {
            console.log("payload: ", action.payload)
            return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }
        }
        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                cart: state.cart.filter(prod => prod.id !== action.payload)
            }
        }
        case 'INCREASE_QUANTITY': {
            console.log("INCREASE_QUANTITY");
            return {
                ...state,
                cart: state.cart.map((prod) => {
                    if(prod.id === action.payload) {
                        prod.quantity += 1;
                    }
                    return prod
                })
            }
        }
        case 'DECREASE_QUANTITY': {
            return {
                ...state,
                cart: state.cart.map((prod) => {
                    if(prod.id === action.payload) {
                        prod.quantity -= 1;
                    }

                    return prod
                })
            }
        }
        default:
            throw new Error('Unrecognized Action');
    }
}

export default reducers;