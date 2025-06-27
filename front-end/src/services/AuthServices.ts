import axios from 'axios';
import { API_LOGIN } from '../variables/APIS';
import { UserProfileToken } from '../Models/User';
import { handleError } from '../Helpers/ErrorHandler';


export const loginAPI = async (username: string, password: string) =>{
    try{
        const res = await axios.post<UserProfileToken>(API_LOGIN, {
            username: username, // backend expects unique 'username'
            password:password
        })
        //the res should contain the token, username, and email

        return res;
    }catch(error) {
        handleError(error);
    }
}

export const registerAPI = async (email:string ,username: string, password: string) =>{
    try{
        const res = await axios.post<UserProfileToken>(API_LOGIN, {
            email: email, // backend expects unique 'email'
            username: username, // backend expects unique 'username'
            password:password,
        })
        //the res should contain the token, username, and email
        return res;
    }catch(error) {
        handleError(error);
    }
}