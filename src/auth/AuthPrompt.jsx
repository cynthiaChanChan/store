import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { authWrapper } from "./authWrapper";
import { ValidatedForm } from "../forms";

const AuthPrompt = (props) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const defaultAttrs = { required: true };

    const formModel = [
        { label: "Username", attrs: { defaultValue: "admin" } },
        { label: "Password", attrs: { type: "password" } },
    ];

    const authenticate = (credentials) => {
        props
            .authenticate(credentials)
            .catch((err) => setErrorMessage(err.message))
            .then(props.history.push("/admin"));
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    {errorMessage != null && (
                        <h4 className="bg-danger text-center text-white m-1 p-2">
                            {errorMessage}
                        </h4>
                    )}
                    <ValidatedForm
                        formModel={formModel}
                        defaultAttrs={defaultAttrs}
                        submitCallback={authenticate}
                        submitText="Login"
                        cancelCallback={() => props.history.push("/")}
                        cancelText="Cancel"
                    />
                </div>
            </div>
        </div>
    );
};

export default withRouter(authWrapper(AuthPrompt));
