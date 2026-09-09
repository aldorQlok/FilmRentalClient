import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5043/",
    withCredentials: true,
});

export async function loginWithCookie(email, password){
    await api.post("login?useCookies=true", {email, password});
}

export async function checkAuthentication(){
    try{
        await api.get("manage/info")
        return true;
    }
    catch(error){
        if(error.response.status === 401){
            return false;
        }
    }
}