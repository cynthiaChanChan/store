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
import { Admin } from "./admin";
import { AuthProviderImpl } from "./auth/AuthProviderImpl";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AuthProviderImpl>
                    <Router>
                        <Switch>
                            <Route path="/shop" component={ShopConnector} />
                            <Route path="/admin" component={Admin} />
                            <Redirect to="/shop" />
                        </Switch>
                    </Router>
                </AuthProviderImpl>
            </PersistGate>
        </Provider>
    );
}

export default App;
