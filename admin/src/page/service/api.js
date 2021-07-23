import axios from 'axios';
const url ={    /// tat ca cac duong dan thi nam o day
    baseURL: "http://localhost:7000",
    movies: "/movies",
    ussers: "/users",
    people: "/persons",
    news: "/news",
    login: "/login",
    reviews: "/reviews",
    actions:'/action',
    comment: "/comments",
};
const instance = axios.create({             
    baseURL: url.baseURL,                   
    headers:{
        "Content-Type":"application/json",  
        "Accept":"application/json",
        'Authorization': `Basic ${localStorage.getItem("loginInfo")}`          
    },
});



export default {   
    url : url,
    axios: instance,
    get : instance.get,
    post : instance.post,
    put : instance.post,
    delete : instance.delete,
};