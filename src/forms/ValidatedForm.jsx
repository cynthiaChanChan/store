import React, { useState } from "react";
import { ValidationError, ValidationMessages } from "./";

const { GetMessages } = ValidationMessages;

const ValidatedForm = ({
    formModel,
    defaultAttrs,
    cancelText,
    cancelCallback,
    submitText,
    submitCallback,
}) => {
    const [validationErrors, setValidationErrors] = useState({});
    const formElements = {};

    const registerRef = (element) => {
        if (element !== null) {
            formElements[element.name] = element;
        }
    };

    const handelSubmit = () => {
        const errors = {};
        console.log(formElements);
        Object.values(formElements).forEach((elem) => {
            if (!elem.checkValidity()) {
                errors[elem.name] = GetMessages(elem);
            }
        });
        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {
            //Get name and value to make a new object
            const data = Object.assign(
                ...Object.entries(formElements).map((e) => ({
                    [e[0]]: e[1].value,
                }))
            );
            submitCallback(data);
        }
    };

    const renderElement = (modelItem) => {
        const name = modelItem.name || modelItem.label.toLowerCase();
        return (
            <div className="form-group" key={modelItem.label}>
                <label>{modelItem.label}</label>
                <ValidationError errors={validationErrors[name]} />
                <input
                    name={name}
                    ref={registerRef}
                    className="form-control"
                    {...defaultAttrs}
                    {...modelItem.attrs}
                />
            </div>
        );
    };

    return (
        <>
            {formModel.map((m) => renderElement(m))}
            <div className="text-center">
                <button
                    className="btn btn-secondary m-1"
                    onClick={cancelCallback}
                >
                    {cancelText || "Cancel"}
                </button>
                <button className="btn btn-primary m-1" onClick={handelSubmit}>
                    {submitText || "Submit"}
                </button>
            </div>
        </>
    );
};

export default ValidatedForm;
