import React, { lazy, Suspense } from "react";
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
import { AuthProviderImpl } from "./auth/AuthProviderImpl";
const Admin = lazy(() => import("./admin/Admin/Admin"));

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AuthProviderImpl>
                    <Router>
                        <Switch>
                            <Route path="/shop" component={ShopConnector} />
                            <Route
                                path="/admin"
                                render={(routeProps) => (
                                    <Suspense fallback={<h3>Loading...</h3>}>
                                        <Admin {...routeProps} />
                                    </Suspense>
                                )}
                            />
                            <Redirect to="/shop" />
                        </Switch>
                    </Router>
                </AuthProviderImpl>
            </PersistGate>
        </Provider>
    );
}

export default App;
