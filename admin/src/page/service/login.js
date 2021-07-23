import api from "./api";


const login = (data) => api.post(`${api.url.login}`,data); 

export default {
    login
};