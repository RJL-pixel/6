import {axiosService} from "./axios.services";
import {urls} from "../constants";

const posrServices = {
    getAll: () => axiosService.get(urls.posts)
}

export {
    posrServices
}