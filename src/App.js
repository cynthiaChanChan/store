import React from "react";
import { SportsStoreDataStore } from "./redux/store";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import ShopConnector from "./pages/ShopConnector/ShopConnector";

function App() {
    return (
        <Provider store={SportsStoreDataStore}>
            <Router>
                <Switch>
                    <Route path="/shop" component={ShopConnector} />
                    <Redirect to="/shop" />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
