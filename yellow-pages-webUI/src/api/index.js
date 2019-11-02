import axios from 'axios';

const api = axios.create({baseURL:"http://localhost:3000/api/"});

const serviceAPI = {

    get(serviceName,id) {
        return api.get(`${serviceName}/${id}`)
        
    },
    all(serviceName) {
        return api.get(`${serviceName}/`)
        
    },
    create(serviceName,payload) {
        return api.post(`${serviceName}/?access_token=${localStorage.getItem('token'
        )}`,{...payload})
        
    },
    update(serviceName,id, payload) {
        return api.patch(`${serviceName}/${id}?access_token=${localStorage.getItem('token'
        )}`,{...payload})
        
        
    },
    delete(serviceName,id) {
        return api.delete(`${serviceName}/${id}?access_token=${localStorage.getItem('token'
        )}`)
        
    },
    login(payload){
        return api.post(`Users/login`,{...payload})
    },
    register(payload){
        return api.post(`Users/`,{...payload})
    },
    logout(){
        return api.post('Users/logout')
    },
    upload(payload){
        return api.post(`Attachments/images/upload?access_token=${localStorage.getItem('token'
        )}`,payload,{headers:{'Content-Type':'multipart/from-data'}})
    }
};
export default serviceAPI;