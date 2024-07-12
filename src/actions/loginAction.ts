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

    const response: LoginResponse = await axiosClient.post('/auth/login', { email, password })
        .then(res => res.data)
        .catch(response => {
            if(response.status === 200) {
                console.log('Not success')
            }
        });

    localStorage.setItem('token', response.token);
    
    return redirect('/');
}