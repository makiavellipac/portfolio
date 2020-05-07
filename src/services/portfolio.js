import axios from 'axios';
const baseURL ="http://localhost:3000";

const MY_SERVICE = axios.create({
    baseURL,
    withCredentials:true
})

const PORTFOLIO_SERVICE={
    getAllProjects: async()=>{
        return await MY_SERVICE.get(`/getData`);
    },
    getIdProjects:async(id)=>{
        return await MY_SERVICE.get(`/getDataId=${id}`)
    },
    getAllType:async(Type)=>{
        return await MY_SERVICE.get(`/getDataType=${Type}`)
    }
}
export default PORTFOLIO_SERVICE;