import { ActionTypes } from "../types";

const INITIAL_STATE = {};
const ShopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...state,
                [action.payload.dataType]: action.payload.data,
            };
        default:
            return state;
    }
};

export default ShopReducer;
