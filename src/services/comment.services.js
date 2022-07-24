import {axiosService} from "./axios.services";
import {urls} from "../constants";

const commentServices = {
    getAll: () => axiosService.get(urls.posts)
}

export {
   commentServices
}