import axios from "@/utils/axios";

export function getUserList(){
    const config = {method:"get",url:"/api/user"};
    return axios(config).catch(error=>{
        return null
    });
}


export function addUser(data){
    const config = {method:"put",url:"/api/user",data};
    return axios(config).catch(error=>{
        return null
    });
}

export function updateStatus(data){
    const config = {method:"post",url:"/api/user/update",data};
    return axios(config).catch(error=>{
        return null
    });
}