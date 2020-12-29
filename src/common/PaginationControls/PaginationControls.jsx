import React, { useCallback } from "react";
import { PaginationButtons } from "../";

const PaginationControls = ({
    currentPage,
    pageCount,
    navigateToPage,
    pageSize,
    sizes,
    keys,
    sortKey,
    setPageSize,
    setSortProperty,
}) => {
    const pageSizes = sizes || [5, 10, 25, 100];
    const sortKeys = keys || ["Name", "Price"];
    const handlePageSizeChange = useCallback(
        (e) => {
            setPageSize(e.target.value);
        },
        [setPageSize]
    );

    const handleSortPropertyChange = useCallback(
        (e) => {
            setSortProperty(e.target.value);
        },
        [setSortProperty]
    );

    return (
        <div className="m-2">
            <div className="text-center m-1">
                <PaginationButtons
                    currentPage={currentPage}
                    pageCount={pageCount}
                    navigateToPage={navigateToPage}
                />
            </div>
            <div className="form-inline justify-content-center">
                <select
                    className="form-control m-2"
                    onChange={handlePageSizeChange}
                    value={pageSize || pageSizes[0]}
                >
                    {pageSizes.map((s) => (
                        <option value={s} key={s}>
                            {s} per page
                        </option>
                    ))}
                </select>
                <select
                    className="form-control m-2"
                    onChange={handleSortPropertyChange}
                    value={sortKey || sortKeys[0]}
                >
                    {sortKeys.map((k) => (
                        <option value={k.toLowerCase()} key={k}>
                            Sort By {k}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default PaginationControls;
