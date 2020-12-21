import { ActionTypes } from "../types";
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
