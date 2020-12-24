import { ActionTypes, DataTypes } from "../types";
//import { data as phData } from "../../data/placeholderData";
import { RestDataSource } from "../../data/RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => (dispatch) => {
    dataSource.getData(dataType, params).then((res) => {
        dispatch({
            type: ActionTypes.DATA_LOAD,
            payload: {
                dataType,
                data: res.data,
                total: Number(res.headers["x-total-count"]),
                params,
            },
        });
    });
};

export const setPageSize = (newSize) => ({
    type: ActionTypes.DATA_SET_PAGESIZE,
    payload: newSize,
});

export const setSortProperty = (newProp) => ({
    type: ActionTypes.DATA_SET_SORT_PROPERTY,
    payload: newProp,
});

export const placeOrder = (order) => (dispatch) => {
    dataSource.storeData(DataTypes.ORDERS, order).then((res) => {
        dispatch({
            type: ActionTypes.DATA_STORE,
            payload: {
                dataType: DataTypes.ORDERS,
                data: res.data,
            },
        });
    });
};
