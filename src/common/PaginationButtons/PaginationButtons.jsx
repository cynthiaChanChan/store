import React, { useCallback } from "react";

const PaginationButtons = ({ currentPage, pageCount, navigateToPage }) => {
    const getPageNumber = useCallback(() => {
        if (pageCount < 4) {
            return [...Array(pageCount).keys()].slice(1);
        } else if (currentPage <= 4) {
            return [1, 2, 3, 4, 5];
        } else if (currentPage > pageCount - 4) {
            return [...Array(5).keys()].reverse().map((v) => pageCount - v);
        } else {
            return [currentPage - 1, currentPage, currentPage + 1];
        }
    }, [pageCount, currentPage]);

    return (
        <>
            <button
                onClick={() => navigateToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-secondary mx-1"
            >
                Previous
            </button>
            {currentPage > 4 && (
                <>
                    <button
                        className="btn btn-secondary mx-1"
                        onClick={() => navigateToPage(1)}
                    >
                        1
                    </button>
                    <span className="h4">...</span>
                </>
            )}
            {getPageNumber().map((num) => (
                <button
                    className={`btn mx-1 ${
                        num === currentPage ? "btn-primary" : "btn-secondary"
                    }`}
                    key={num}
                    onClick={() => navigateToPage(num)}
                >
                    {num}
                </button>
            ))}
            {currentPage <= pageCount - 4 && (
                <>
                    <span className="h4">...</span>
                    <button
                        className="btn btn-secondary mx-1"
                        onClick={() => navigateToPage(pageCount)}
                    >
                        {pageCount}
                    </button>
                </>
            )}
            <button
                className="btn btn-secondary mx-1"
                onClick={() => navigateToPage(currentPage + 1)}
                disabled={currentPage === pageCount}
            >
                Next
            </button>
        </>
    );
};
export default PaginationButtons;
