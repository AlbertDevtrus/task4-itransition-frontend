import { ActionFunction, redirect } from "react-router-dom";
import axiosClient from "../config/axios";


export const registerAction: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    if(password !== confirmPassword) {
        throw new Error('The password should be the same');
    }

    await axiosClient.post('/auth/register', { email, password, name })
        .then(res => res.data)
        .catch(response => {
            throw new Error(response.data.msg);
        });
    
    return redirect('/login');
}