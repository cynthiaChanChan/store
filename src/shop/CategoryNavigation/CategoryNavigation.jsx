import React from "react";
import { Link } from "react-router-dom";
import { ToggleLink } from "../../common";

const CategoryNavigation = ({ baseUrl, categories }) => {
    return (
        <>
            <ToggleLink to={`${baseUrl}/all`} exact={false}>
                All
            </ToggleLink>
            {categories &&
                categories.map((cat) => (
                    <ToggleLink
                        to={`${baseUrl}/${cat.toLowerCase()}`}
                        key={cat}
                    >
                        {cat}
                    </ToggleLink>
                ))}
            <Link
                className="btn btn-block btn-secondary fixed-bottom m-2 col-3"
                to="/admin"
            >
                Administration
            </Link>
        </>
    );
};

export default CategoryNavigation;
