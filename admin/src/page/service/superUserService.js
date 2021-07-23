import api from "./api";

const list = (data) => {              
    return api.post(`${api.url.ussers}/s`,data);
};

const get = (id) => api.get(`${api.url.ussers}/${id}`); 

const getOne = (id) => api.get(`${api.url.ussers}/get-by-id/${id}`); 
const add = data => api.post(`${api.url.ussers}/add`,data);
const update =(data)=> api.post(`${api.url.ussers}/update`,data).then(res => res.data).catch(err => console.error("Wasn't able to update property.", err));
const remove = (id) => api.delete(`${api.url.ussers}/${id}`);
const getPosts = (data) => api.post(`${api.url.ussers}/post`,data);
const find = (data) => api.post(`${api.url.ussers}/find`,data)
export default {
    list : list,
    get :get,
    add: add,
    update:update,
    remove:remove,
    getOne: getOne,
    find,
    getPosts
};