import { create } from "zustand";
import axiosClient from "../config/axios";
import { useAuthStore } from "./authStore";


interface State {
    selectedUsers: string[];

    updateSelected: (id: string) => void;

    blockUsers: () => void;
    deleteUsers: () => void;
    unblockUsers: () => void;
    selectAll: () => void;
    unSelectAll: () => void;
}

export const useManageStore = create<State>((set) => ({
    selectedUsers: [],

    updateSelected: (id) => {
        set((state) => {
            const isSelected = state.selectedUsers.includes(id);
            return {
                selectedUsers: isSelected
                    ? state.selectedUsers.filter(userId => userId !== id)
                    : [...state.selectedUsers, id]
            };
        });
    },

    blockUsers: async () => {
        const selectedUsers = useManageStore.getState().selectedUsers;
        const token = localStorage.getItem('token');
        if(!token) return;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        }
        try {
            await axiosClient.put('/block', selectedUsers,config)
            set({selectedUsers: []})
            window.location.reload()
        } catch (error) {
            set({selectedUsers: []})
        }
    },

    deleteUsers: async () => {
        const selectedUsers = useManageStore.getState().selectedUsers;
        const token = localStorage.getItem('token');
        if(!token) return;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            data: selectedUsers
        };
        try {
            console.log(config)
            await axiosClient.delete('/delete', config);
            set({selectedUsers: []})
            window.location.reload()
        } catch (error) {
            set({selectedUsers: []})
        }
    },

    unblockUsers: async () => {
        const selectedUsers = useManageStore.getState().selectedUsers;
        const token = localStorage.getItem('token');
        if(!token) return;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        }
        try {
            await axiosClient.put('/unblock', selectedUsers,config)
            set({selectedUsers: []})
            window.location.reload()
        } catch (error) {
            set({selectedUsers: []})
        }
    },

    selectAll: () => {
        const allUsers = useAuthStore.getState().allUsers;
        const selectedUsers = allUsers.map(user => user.id);
        set({selectedUsers: selectedUsers})
    },

    unSelectAll: () => {
        set({selectedUsers: []});
    }
}));
