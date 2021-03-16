import { DataTypes } from "../redux/types";

// const protocol = "http";
// const hostname = "localhost";
// const port = 3500;

export const restUrls = {
    [DataTypes.PRODUCTS]: `/api/products`,
    [DataTypes.CATEGORIES]: `/api/categories`,
    [DataTypes.ORDERS]: `/api/orders`,
};

export const GraphQlUrl = `/graphql`;

export const authUrl = `/login`;
