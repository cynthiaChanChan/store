import React from "react";
import { Link } from "react-router-dom";

const CategoryNavigation = ({ baseUrl, categories }) => {
    return (
        <>
            <Link to={baseUrl} className="btn btn-secondary btn-block">
                All
            </Link>
            {categories &&
                categories.map((cat) => (
                    <Link
                        to={`${baseUrl}/${cat.toLowerCase()}`}
                        className="btn btn-secondary btn-block"
                    >
                        {cat}
                    </Link>
                ))}
        </>
    );
};

export default CategoryNavigation;
