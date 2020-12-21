import React, { useEffect } from "react";
import { DataTypes } from "../../redux/types";

const DataGetter = ({
    children,
    products_params,
    pageSize,
    sortKey,
    match,
    loadData,
}) => {
    useEffect(() => {
        const dsData = products_params || {};
        const rtData = {
            _limit: pageSize || 5,
            _sort: sortKey || "name",
            _page: match.params.page || 1,
            category_like:
                (match.params.category || "") === "all"
                    ? ""
                    : match.params.category,
        };
        if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key])) {
            loadData(DataTypes.PRODUCTS, rtData);
        }
    }, [
        products_params,
        pageSize,
        sortKey,
        match.params.page,
        match.params.category,
        loadData,
    ]);

    return <>{children}</>;
};

export default DataGetter;
