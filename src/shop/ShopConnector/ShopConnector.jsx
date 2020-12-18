import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../../redux/actions/shop";
import { DataTypes } from "../../redux/types";
import { Shop } from "../";

const filterProducts = (products = [], category) =>
    !category || category === "All"
        ? products
        : products.filter(
              (p) => p.category.toLowerCase() === category.toLowerCase()
          );

const ShopConnector = ({ products, categories, loadData }) => {
    useEffect(() => {
        loadData(DataTypes.CATEGORIES);
        loadData(DataTypes.PRODUCTS);
    }, [loadData]);

    return (
        <Switch>
            <Route
                path="/shop/products/:category?"
                render={(routeProps) => (
                    <Shop
                        {...routeProps}
                        products={filterProducts(
                            products,
                            routeProps.match.params.category
                        )}
                        categories={categories}
                    />
                )}
            />
            <Redirect to="/shop/products" />
        </Switch>
    );
};

const mapStateToProps = (state) => ({ ...state.shop });
const mapDispatchToProps = { loadData };

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);
