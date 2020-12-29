import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { GraphQlUrl } from "../../data/urls";
import { OrdersConnector } from "../OrdersConnector";

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
                    <div className="col p-2">
                        <OrdersConnector />
                    </div>
                </div>
            </div>
        </ApolloProvider>
    );
};

export default Admin;
