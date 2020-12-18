import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { ShopConnector } from "./shop";
import { store, persistor } from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Switch>
                        <Route path="/shop" component={ShopConnector} />
                        <Redirect to="/shop" />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
