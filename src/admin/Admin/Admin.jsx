import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Route, Redirect, Switch } from "react-router-dom";

import { GraphQlUrl } from "../../data/urls";
import { OrdersConnector } from "../OrdersConnector";
import { ToggleLink } from "../../common";
import { ConnectedProducts } from "../ProductsConnector";
import { ProductEditor, ProductCreator } from "../";
import AuthPrompt from "../../auth/AuthPrompt";
import { authWrapper } from "../../auth/authWrapper";

// const graphQlClient = new ApolloClient({
//     uri: GraphQlUrl,
// });

const Admin = (props) => {
    const client = new ApolloClient({
        uri: GraphQlUrl,
        request: (gqloperation) =>
            gqloperation.setContext({
                headers: {
                    Authorization: `Bearer<${props.webToken}>`,
                },
            }),
    });
    return (
        <ApolloProvider client={client}>
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
                        {props.isAuthenticated && (
                            <button className="btn btn-block btn-secondary m-2 fixed-bottom col-3">
                                Log out
                            </button>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col p-2">
                        <Switch>
                            {!props.isAuthenticated && (
                                <Route component={AuthPrompt} />
                            )}
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
                            <Redirect to="/admin/orders" />
                        </Switch>
                    </div>
                </div>
            </div>
        </ApolloProvider>
    );
};

export default authWrapper(Admin);
