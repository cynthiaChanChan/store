import React, { useCallback } from "react";

const OrdersRow = ({ order, toggleShipped }) => {
    const calcTotal = useCallback(
        (products) =>
            products
                .reduce(
                    (total, p) => (total += p.quantity * p.product.price),
                    0
                )
                .toFixed(2),
        []
    );

    const getShipping = useCallback(
        (order) =>
            order.shipped ? (
                <i className="fa fa-shipping-fast text-sucess" />
            ) : (
                <i className="fa fa-exclamation-circle text-danger" />
            ),
        []
    );

    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td className="text-right">${calcTotal(order.products)}</td>
            <td className="text-center">
                <button
                    className="btn btn-sm btn-block bg-muted"
                    onClick={toggleShipped}
                >
                    {getShipping(order)}
                    <span> {order.shipped ? "Shipped" : "Pending"}</span>
                </button>
            </td>
        </tr>
    );
};

export default OrdersRow;
