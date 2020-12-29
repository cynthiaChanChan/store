import React from "react";
import { Link } from "react-router-dom";

const ProductsRow = ({ product, deleteProduct }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td className="text-right">${product.price.toFixed(2)}</td>
            <td className="text-center">
                <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={() => deleteProduct(product.id)}
                >
                    Delete
                </button>
                <Link
                    to={`/admin/products/${product.id}`}
                    className="btn btn-sm btn-warning"
                >
                    Edit
                </Link>
            </td>
        </tr>
    );
};

export default ProductsRow;
