import { create } from "zustand";
import axiosClient from "../config/axios";

interface OwnUser {
    id: string;
    name: string;
}

interface User {
    id: string;
    name: string;
    status: boolean;
    email: string;
    lastLogin: string;
}

interface State {
    user: OwnUser | null;
    logout: () => void;
    allUsers: User[];
    getUsers: () => Promise<void> ;
    loading: boolean;
}

export const useAuthStore = create<State>((set) => ({
    user: null,
    allUsers: [],
    loading: true,

    getUsers: async () => {
        set({loading: true});
        const token = localStorage.getItem('token');
        if(!token) {
            set({user: null, loading: false})
            return;
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const { data } = await axiosClient.get('/', config)
            set({ allUsers: data.allUsers, user: data.user, loading: false })
        } catch (error) {
            localStorage.removeItem('token');
            set({user: null})
            window.location.reload()
        }
    },
    
    logout: () => {
        localStorage.removeItem('token');
        set({ user: null });
    },
}));
