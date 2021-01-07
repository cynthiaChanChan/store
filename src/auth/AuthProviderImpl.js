import React, { useCallback, useState } from "react";
import Axios from "axios";
import { AuthContext } from "./AuthContext";
import { authUrl } from "../data/urls";

export const AuthProviderImpl = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [webToken, setWebToken] = useState(false);

    const authenticate = useCallback((credentials) => {
        return Axios.post(authUrl, credentials).then((response) => {
            if (response.data.success === true) {
                setIsAuthenticated(true);
                setWebToken(response.data.token);
                return true;
            } else {
                throw new Error("Invalid Credentials");
            }
        });
    }, []);
    const signout = useCallback(() => {
        setIsAuthenticated(false);
        setWebToken(null);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                webToken,
                authenticate,
                signout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
