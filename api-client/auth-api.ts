
import { LoginPayload } from '@/models/auth';
import axiosClient from './axios-client';

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post('/login', payload);
    },

    register(payload: any) {
        return axiosClient.post('/register', payload);
    },
    registerChild(payload: any) {
        return axiosClient.post('/register/create-child-account', payload);
    },
    updateUser(payload: any) {
        return axiosClient.put('user', payload);
    },

    logout() {
        return axiosClient.post('/logout');
    },

    getProfile() {
        return axiosClient.get('/profile');
    },

    forgotPassword(payLoad: any) {
        return axiosClient.post('/user/forgot-pasword', payLoad);
    },

    resetPasswordByKey(payLoad: any) {
        return axiosClient.post('/user/reset-password-by-key', payLoad);
    },
    changePassword(payLoad: any) {
        return axiosClient.put('/user/user-change-password', payLoad);
    },
    changeAvatar(payLoad: any) {
        return axiosClient.post('user/update-avatar', payLoad);
    },
    softDeleteUser(id: string) {
        return axiosClient.delete(`/user/soft-delete/${id}`);
    },
};
