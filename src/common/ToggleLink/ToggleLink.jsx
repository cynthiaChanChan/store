import React from "react";
import { Route, Link } from "react-router-dom";

const ToggleLink = ({
    to,
    exact,
    children,
    className,
    activeClass,
    inActiveClass,
}) => {
    const baseClasses = className || "m-2 btn btn-block";
    const activeCls = activeClass || "btn-primary";
    const inActiveCls = inActiveClass || "btn-secondary";

    return (
        <Route
            path={to}
            exact={exact}
            children={(routeProps) => {
                const combinedClasses = `${baseClasses} ${
                    routeProps.match ? activeCls : inActiveCls
                }`;
                return (
                    <Link to={to} className={combinedClasses}>
                        {children}
                    </Link>
                );
            }}
        />
    );
};

export default ToggleLink;
