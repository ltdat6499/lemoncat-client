import api from "./api";

const list = (data) => {              
    return api.post(`${api.url.movies}`,data);
};

const get = (id) => api.get(`${api.url.movies}/${id}`); 

const getOne = (id) => api.get(`${api.url.movies}/get-by-id/${id}`); 
const add = data => api.post(`${api.url.movies}/add`,data);
const update =(data)=> api.post(`${api.url.movies}/update`,data);
const remove = (id) => api.delete(`${api.url.movies}/${id}`);

const find = (data) => api.post(`${api.url.movies}/find`,data)
export default {
    list : list,
    get :get,
    add: add,
    update:update,
    remove:remove,
    getOne: getOne,
    find
};