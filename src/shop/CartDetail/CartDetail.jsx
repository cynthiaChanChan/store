import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { CartDetailRows } from "../";

const CartDetail = ({
    cart,
    carItems,
    cartPrice,
    updateCartQuantity,
    removeFromCart,
}) => {
    console.log(cart);
    const getLinkClasses = useCallback(
        () => `btn btn-secondary m-1 ${carItems === 0 ? "disabled" : ""}`,
        [carItems]
    );
    return (
        <div className="m-3">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Subtotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <CartDetailRows
                        cart={cart}
                        cartPrice={cartPrice}
                        updateCartQuantity={updateCartQuantity}
                        removeFromCart={removeFromCart}
                    />
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/shop">
                    Continue Shopping
                </Link>
                <Link className={getLinkClasses()} to="/shop/checkout">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default CartDetail;
