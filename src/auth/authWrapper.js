import React from "react";
import { AuthContext } from "./AuthContext";

export const authWrapper = (WrappedComponent) => (props) => (
    <AuthContext.Consumer>
        {(context) => <WrappedComponent {...props} {...context} />}
    </AuthContext.Consumer>
);
