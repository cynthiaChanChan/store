import { ActionTypes, DataTypes } from "../types";

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
        case ActionTypes.DATA_SET_PAGESIZE:
            return {
                ...state,
                pageSize: action.payload,
            };
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return {
                ...state,
                sortKey: action.payload,
            };
        case ActionTypes.DATA_STORE:
            if (action.payload.dataType === DataTypes.ORDERS) {
                return {
                    ...state,
                    order: action.payload.data,
                };
            }
            break;
        default:
            return state;
    }
};

export default ShopReducer;
