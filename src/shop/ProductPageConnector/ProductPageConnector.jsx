import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../../redux/actions/shop";

const ProductPageConnector = (PageComponent) => {
    const Pages = ({
        match,
        history,
        pageSize,
        products_total,
        sortKey,
        ...otherProps
    }) => (
        <PageComponent
            {...otherProps}
            currentPage={Number(match.params.page)}
            pageCount={Math.ceil(
                (products_total | pageSize || 5) / (pageSize || 5)
            )}
            pageSize={pageSize}
            sortKey={sortKey}
            navigateToPage={(page) =>
                history.push(`/shop/products/${match.params.category}/${page}`)
            }
        />
    );

    const mapStateToProps = ({ shop }) => ({
        pageSize: shop.pageSize,
        products_total: shop.products_total,
        sortKey: shop.sortKey,
    });
    const mapDispatchToProps = {
        setPageSize,
        setSortProperty,
    };
    return withRouter(connect(mapStateToProps, mapDispatchToProps)(Pages));
};

export default ProductPageConnector;
