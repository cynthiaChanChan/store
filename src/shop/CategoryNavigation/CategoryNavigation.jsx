import React from "react";
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
        </>
    );
};

export default CategoryNavigation;
