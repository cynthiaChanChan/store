import React, { useCallback, useState } from "react";
import { ValidationError, ValidationMessages } from "./";

const { GetMessages } = ValidationMessages;

const ValidatedForm = ({
    formModel,
    defaultAttrs,
    cancelText,
    cancelCallback,
    submitText,
}) => {
    const [validationErrors, setValidationErrors] = useState({});
    const formElements = {};

    const registerRef = useCallback(
        (element) => {
            if (element !== null) {
                formElements[element.name] = element;
            }
        },
        [formElements]
    );

    const handelSubmit = useCallback(() => {
        const errors = {};
        Object.values(formElements).forEach((elem) => {
            if (!elem.checkValidity()) {
                errors[elem.name] = GetMessages(elem);
            }
        });
        setValidationErrors(errors);
    }, []);

    const renderElement = useCallback(
        (modelItem) => {
            const name = modelItem.name || modelItem.label.toLowerCase();
            return (
                <div className="form-group" key={modelItem.label}>
                    <label>{modelItem.label}</label>
                    <ValidationError errors={validationErrors[name]} />
                    <input
                        name={name}
                        ref={registerRef}
                        className="for-contrl"
                        {...defaultAttrs}
                        {...modelItem.attrs}
                    />
                </div>
            );
        },
        [defaultAttrs, validationErrors, registerRef]
    );

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
                <button className="btn btn-primary m-1">
                    {submitText || "Submit"}
                </button>
            </div>
        </>
    );
};

export default ValidatedForm;
