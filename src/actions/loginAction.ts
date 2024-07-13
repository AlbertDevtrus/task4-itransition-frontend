import { ActionFunction, redirect } from "react-router-dom";
import axiosClient from "../config/axios";


interface LoginResponse {
    msg: string;
    id: string;
    token: string;
}

export const loginAction: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const response: LoginResponse = await axiosClient.post('/auth/login', { email, password })
            .then(res => res.data);
        localStorage.setItem('token', response.token);
        return window.location.replace('/');
    } catch (error) {
        console.error('Login fail')        
        return redirect('/login');
    }

}