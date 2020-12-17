import { createStore } from "redux";
import ShopReducer from "./reducers/shop";
export const SportsStoreDataStore = createStore(ShopReducer);
