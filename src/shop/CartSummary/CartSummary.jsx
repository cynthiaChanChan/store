import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const CartSummary = ({ cartItems, cartPrice }) => {
    const getSummary = useCallback(() => {
        if (cartItems > 0) {
            return (
                <span>
                    {cartItems} item(s), ${cartPrice.toFixed(2)}
                </span>
            );
        } else {
            return <span>Your cart: (empty)</span>;
        }
    }, [cartItems, cartPrice]);

    const getLinkClasses = useCallback(
        () =>
            `btn btn-sm bg-dark text-white ${
                cartItems === 0 ? "disabled" : ""
            }`,
        [cartItems]
    );
    return (
        <div className="float-right">
            <small>
                {getSummary()}
                <Link className={getLinkClasses()} to="/shop/cart">
                    <li className="fa fa-shopping-cart"></li>
                </Link>
            </small>
        </div>
    );
};

export default CartSummary;
