import Axios from "axios";
import { restUrls } from "./urls";

export class RestDataSource {
    sendRequest = (method, url) => Axios.request({ method, url });

    getData = (dataType) => this.sendRequest("get", restUrls[dataType]);
}
