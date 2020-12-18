import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import shopReducer from "./shop";
import cartReducer from "./cart";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], //will be persisted
};

const reducers = combineReducers({
    shop: shopReducer,
    cart: cartReducer,
});

export default persistReducer(persistConfig, reducers);
