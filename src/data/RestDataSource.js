import Axios from "axios";
import { restUrls } from "./urls";

export class RestDataSource {
    sendRequest = (method, url, params) =>
        Axios.request({ method, url, params });

    getData = (dataType, params) =>
        this.sendRequest("get", restUrls[dataType], params);
}
