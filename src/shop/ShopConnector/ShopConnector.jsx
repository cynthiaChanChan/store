import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../../redux/actions/shop";
import { DataTypes } from "../../redux/types";
import { Shop, CartDetail } from "../";
import { DataGetter } from "../../common";

import {
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
} from "../../redux/actions/cart";

// const filterProducts = (products = [], category) =>
//     !category || category === "All"
//         ? products
//         : products.filter(
//               (p) => p.category.toLowerCase() === category.toLowerCase()
//           );

const ShopConnector = ({
    shop,
    products,
    categories,
    loadData,
    ...otherProps
}) => {
    useEffect(() => {
        loadData(DataTypes.CATEGORIES);
        //loadData(DataTypes.PRODUCTS);
    }, [loadData]);
    return (
        <Switch>
            <Redirect
                from="/shop/products/:category"
                to="/shop/products/:category/1"
                exact={true}
            />
            <Route
                path="/shop/products/:category/:page"
                render={(routeProps) => (
                    <DataGetter loadData={loadData} {...routeProps} {...shop}>
                        <Shop
                            {...otherProps}
                            {...routeProps}
                            products={shop.products}
                            categories={shop.categories}
                        />
                    </DataGetter>
                )}
            />
            <Route
                path="/shop/cart"
                render={(routeProps) => (
                    <CartDetail {...otherProps} {...routeProps} />
                )}
            />
            <Redirect to="/shop/products/all/1" />
        </Switch>
    );
};

const mapStateToProps = ({ shop, cart }) => ({
    shop,
    cart: cart.cart,
    cartItems: cart.cartItems,
    cartPrice: cart.cartPrice,
});
const mapDispatchToProps = {
    loadData,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);
