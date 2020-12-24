import Axios from "axios";
import { restUrls } from "./urls";

export class RestDataSource {
    sendRequest = (method, url, params, data) =>
        Axios.request({ method, url, params, data });

    getData = (dataType, params) =>
        this.sendRequest("get", restUrls[dataType], params);

    storeData = (dataType, data) =>
        this.sendRequest("post", restUrls[dataType], {}, data);
}
