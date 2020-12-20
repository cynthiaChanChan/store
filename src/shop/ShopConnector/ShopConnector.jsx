import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../../redux/actions/shop";
import { DataTypes } from "../../redux/types";
import { Shop, CartDetail } from "../";
import {
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
} from "../../redux/actions/cart";

const filterProducts = (products = [], category) =>
    !category || category === "All"
        ? products
        : products.filter(
              (p) => p.category.toLowerCase() === category.toLowerCase()
          );

const ShopConnector = ({ products, categories, loadData, ...otherProps }) => {
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
                        {...otherProps}
                        {...routeProps}
                        products={filterProducts(
                            products,
                            routeProps.match.params.category
                        )}
                        categories={categories}
                    />
                )}
            />
            <Route
                path="/shop/cart"
                render={(routeProps) => (
                    <CartDetail {...otherProps} {...routeProps} />
                )}
            />
            <Redirect to="/shop/products" />
        </Switch>
    );
};

const mapStateToProps = ({ shop, cart }) => ({
    products: shop.products,
    categories: shop.categories,
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
