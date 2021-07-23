import api from "./api";

const list = (data) => {              
    return api.post(`${api.url.actions}`,data);
};

// const find = (data) => api.post(`${api.url.movies}/get`,data)
export default {
    list : list,

};