import { createStore } from "redux";
import { ShopReducer } from "./reducers";
export const SportsStoreDataStore = createStore(ShopReducer);
