import React from "react";
import { CategoryNavigation, ProductList, CartSummary } from "../";

const Shop = ({ categories, products, addToCart, cartItems, cartPrice }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                    <CartSummary cartItems={cartItems} cartPrice={cartPrice} />
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation
                        baseUrl="/shop/products"
                        categories={categories}
                    />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={products} addToCart={addToCart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;
