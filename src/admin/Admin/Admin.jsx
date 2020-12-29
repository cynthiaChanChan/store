import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Route, Redirect, Switch } from "react-router-dom";

import { GraphQlUrl } from "../../data/urls";
import { OrdersConnector } from "../OrdersConnector";
import { ToggleLink } from "../../common";
import { ConnectedProducts } from "../ProductsConnector";
import { ProductEditor, ProductCreator } from "../";

const graphQlClient = new ApolloClient({
    uri: GraphQlUrl,
});

const Admin = () => {
    return (
        <ApolloProvider client={graphQlClient}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col bg-info text-white">
                        <div className="navbar-brand">SPORTS STORE</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 p-2">
                        <ToggleLink to="/admin/orders">Orders</ToggleLink>
                        <ToggleLink to="/admin/products">Products</ToggleLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-2">
                        <Switch>
                            <Route
                                path="/admin/orders"
                                component={OrdersConnector}
                            />
                            <Route
                                path="/admin/products/create"
                                component={ProductCreator}
                            />
                            <Route
                                path="/admin/products/:id"
                                component={ProductEditor}
                            />
                            <Route
                                path="/admin/products"
                                component={ConnectedProducts}
                            />
                            <Redirect to="/admin/order" />
                        </Switch>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    );
};

export default Admin;
