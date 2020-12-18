import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./reducers/index";

const middleWares = [thunk];

if (process.env.NODE_ENV === "development") {
    //removing redux-logger from production build
    middleWares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleWares));
const persistor = persistStore(store);

export { store, persistor };
