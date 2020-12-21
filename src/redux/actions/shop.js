import { ActionTypes } from "../types";
//import { data as phData } from "../../data/placeholderData";
import { RestDataSource } from "../../data/RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType) => (dispatch) => {
    dataSource.getData(dataType).then((res) => {
        dispatch({
            type: ActionTypes.DATA_LOAD,
            payload: {
                dataType,
                data: res.data,
            },
        });
    });
};
