import { ActionTypes } from "./types";
import { data as phData } from "../data/placeholderData";
export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType,
        data: phData[dataType],
    },
});
