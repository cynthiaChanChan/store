import React from "react";
import { Mutation } from "react-apollo";

import { ValidatedForm } from "../../forms";
import { storeProduct, updateProduct } from "../clientMutations";

const ProductCreator = ({ mode, history, product }) => {
    let mutation = storeProduct;
    let formModel = [
        { label: "Name" },
        { label: "Description" },
        { label: "Category" },
        { label: "Price", attrs: { type: "number" } },
    ];
    const defaultAttrs = { type: "text", required: true };
    if (mode === "edit") {
        mutation = updateProduct;
        formModel = [
            { label: "Id", attrs: { disabled: true } },
            ...formModel,
        ].map((item) => ({
            ...item,
            attrs: {
                ...item.attrs,
                defaultValue: product[item.label.toLowerCase()],
            },
        }));
    }
    const navigate = () => history.push("/admin/products");
    return (
        <div className="cotainer-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">STORE</div>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    <Mutation mutation={mutation}>
                        {(saveMutation, { client }) => {
                            return (
                                <ValidatedForm
                                    formModel={formModel}
                                    defaultAttrs={defaultAttrs}
                                    submitCallback={(data) => {
                                        saveMutation({
                                            variables: {
                                                product: {
                                                    ...data,
                                                    price: Number(data.price),
                                                },
                                            },
                                        });
                                        if (mode !== "edit") {
                                            client.resetStore();
                                        }
                                        navigate();
                                    }}
                                    cancelCallback={navigate}
                                    submitText="Save"
                                    cancelText="Cancel"
                                />
                            );
                        }}
                    </Mutation>
                </div>
            </div>
        </div>
    );
};

export default ProductCreator;
