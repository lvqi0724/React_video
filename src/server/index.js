import axios from 'axios'

const server = axios.create(
    //http://api.yeyou.online"
    {
       baseURL: "http://127.0.0.1:3000",
        timeout: 5000,
        withCredentials: false,
    }
)


// 请求拦截
server.interceptors.request.use((config) =>{
    return config
}, (error) =>{
    return Promise.reject(error);
})


// 返回拦截

server.interceptors.response.use((response) =>{

    if(response.status === 200) {
        return response.data
    }
}, (error) =>{


    return Promise.reject(error);
})


export  default  server