import { ActionTypes } from "../types";

const INITIAL_STATE = {
    cart: [],
    cartItems: 0,
    cartPrice: 0,
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.CART_ADD:
            const { p, q } = action.payload;
            let cart = [...state.cart];
            let existing = cart.find((item) => item.product.id === p.id);
            if (existing) {
                existing.quantity += q;
            } else {
                cart = [...cart, action.payload];
            }
            return {
                ...state,
                cart,
                cartItems: (state.cartItems += q),
                cartPrice: p.price * q + state.cartPrice,
            };
        case ActionTypes.CART_UPDATE:
            let { cartItems, cartPrice } = state;
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.product.id === action.payload.product.id) {
                        const diff = action.payload.quantity - item.quantity;
                        cartItems += diff;
                        cartPrice += item.product.price * diff;
                        return action.payload;
                    } else {
                        return item;
                    }
                }),
                cartItems,
                cartPrice,
            };
        case ActionTypes.CART_REMOVE:
            let selection = state.cart.find(
                (item) => item.product.id === action.payload.id
            );
            return {
                ...state,
                cartItems: (state.cartItems -= selection.quantity),
                cartPrice: (state.cartPrice -=
                    selection.quantity * selection.product.price),
                cart: cart.filter((item) => item !== selection),
            };
        case ActionTypes.CART_CLEAR:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default CartReducer;
