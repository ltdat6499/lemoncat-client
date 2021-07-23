import api from "./api";

const list = (data) => {              
    return api.post(`${api.url.people}`,data);
};

const get = (id) => api.get(`${api.url.people}/${id}`); 

const getOne = (id) => api.get(`${api.url.people}/get-by-id/${id}`); 
const add = data => api.post(`${api.url.people}/add`,data);
const update =(data)=> api.post(`${api.url.people}/update`,data).then(res => res.data).catch(err => console.error("Wasn't able to update property.", err));
const remove = (id) => api.delete(`${api.url.people}/${id}`);
const find = (data) => api.post(`${api.url.people}/find`,data)
export default {
    list : list,
    get :get,
    add: add,
    update:update,
    remove:remove,
    getOne: getOne,
    find
};