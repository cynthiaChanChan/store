import React, { useCallback } from "react";

const CartDetailRows = ({
    cart,
    cartPrice,
    updateCartQuantity,
    removeFromCart,
}) => {
    const handleChange = useCallback(
        (product, e) => {
            updateCartQuantity(product, e.target.value);
        },
        [updateCartQuantity]
    );

    if (!cart || cart.length === 0) {
        return (
            <tr>
                <td colSpan="5">Your cart is empty</td>
            </tr>
        );
    }
    return (
        <>
            {cart.map((item) => (
                <tr key={item.product.id}>
                    <td>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleChange(item.product, e)}
                        />
                    </td>
                    <td>{item.product.name}</td>
                    <td>{item.product.price.toFixed(2)}</td>
                    <td>{(item.product.price * item.quantity).toFixed(2)}</td>
                    <td>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => removeFromCart(item.product)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            ))}
            <tr>
                <th className="text-right" colSpan="3">
                    Total:
                </th>
                <th colSpan="2">{cartPrice.toFixed(2)}</th>
            </tr>
        </>
    );
};

export default CartDetailRows;
