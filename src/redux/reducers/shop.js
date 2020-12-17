import { ActionTypes } from "../types";
const ShopReducer = (storeData, action) => {
    switch (action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data,
            };
        default:
            return storeData || {};
    }
};

export default ShopReducer;
