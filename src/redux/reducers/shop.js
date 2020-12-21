import { ActionTypes } from "../types";

const INITIAL_STATE = {
    products: [],
    categories: [],
};
const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...state,
                [action.payload.dataType]: action.payload.data,
                [`${action.payload.dataType}_total`]: action.payload.total,
                [`${action.payload.dataType}_params`]: action.payload.params,
            };
        default:
            return state;
    }
};

export default ShopReducer;
