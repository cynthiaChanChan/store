import { DataTypes } from "../redux/types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const restUrls = {
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
};
