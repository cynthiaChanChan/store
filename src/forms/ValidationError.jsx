import React from "react";

const ValidationError = ({ errors }) => {
    if (!errors) {
        return null;
    }

    return errors.map((err) => (
        <h6 className="text-danger" key={err}>
            {err}
        </h6>
    ));
};

export default ValidationError;
