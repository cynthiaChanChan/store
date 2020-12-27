import React, { useCallback } from "react";
import { ValidatedForm } from "../../forms";

const Checkout = ({ cart, placOrder, clearCart, history }) => {
    const defaultAttrs = { type: "text", required: true };
    const formModel = [
        { label: "Name" },
        { label: "Email", attrs: { type: "email" } },
        { label: "Address" },
        { label: "City" },
        { label: "Zip/Postal Code", name: "zip" },
        { label: "Country" },
    ];

    const handleSubmit = useCallback(
        (formData) => {
            const order = {
                ...formData,
                products: cart.map((item) => ({
                    quantity: item.quantity,
                    product_id: item.product.id,
                })),
            };
            placOrder(order);
            clearCart();
            history.push("/shop/thanks");
        },
        [cart, placOrder, clearCart, history]
    );

    const handleCancel = useCallback(() => {
        history.push("/shop/cart");
    }, [history]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    <ValidatedForm
                        formModel={formModel}
                        defaultAttrs={defaultAttrs}
                        submitCallback={handleSubmit}
                        cancelCallback={handleCancel}
                        submitText="Place Order"
                        cancelText="Return to Cart"
                    />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
