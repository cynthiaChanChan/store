import React from "react";
import { Query } from "react-apollo";
import { ProductCreator } from "../";
import { product } from "../clientQueries";

const ProductEditor = (props) => {
    return (
        <Query query={product} variables={{ id: props.match.params.id }}>
            {({ loading, data }) => {
                if (!loading) {
                    return (
                        <ProductCreator
                            {...props}
                            product={data.product}
                            mode="edit"
                        />
                    );
                }
                return null;
            }}
        </Query>
    );
};

export default ProductEditor;
