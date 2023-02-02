import axios from "axios";
import {PhotosType, ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '209375cc-5609-47e9-acf1-6a72c60cfc4c'
    }
});

type GetUsersType = {
    items: [{
        id: number
        name: string
        status: string
        photos: PhotosType
        followed: boolean
    }]
    totalCount: number
    error: string
}

type DefaultResponseType = {
    data: Object
    resultCode: number
    messages: Array<string>
}

type SavePhotoType = {
    data: {photos: PhotosType}
    resultCode: number
    messages: Array<string>
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null) {
        return instance
            .get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(response => response.data)
    },
    unfollow(userID: number) {
        return instance
            .delete<DefaultResponseType>(`follow/${userID}`)
            .then(response => response.data)
    },
    follow(userID: number) {
        return instance
            .post<DefaultResponseType>(`follow/${userID}`)
            .then(response => response.data);
    },
}

export const profileAPI = {
    getProfile(userID: number) {
        return instance
            .get<ProfileType>(`profile/${userID}`)
            .then(response => response.data);
    },
    getStatus(userID: number) {
        return instance
            .get<string>(`profile/status/${userID}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance
            .put<DefaultResponseType>(`profile/status/`, {status})
            .then(response => response.data);
    },
    savePhoto(photo: File) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance
            .put<SavePhotoType>(`profile/photo/`, formData)
            .then(response => response.data);
    },
    saveProfileData(info: ProfileType) {
        return instance
            .put<DefaultResponseType>(`profile/`, info)
            .then(response => response.data);
    },
}

export enum ResultCodes {
    Success,
    Error,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodes
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userID: number
    }
    resultCode: ResultCodes | ResultCodeForCaptcha
    messages: Array<string>
}

export const authAPI = {
    getMe() {
        return instance
            .get<MeResponseType>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance
            .post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return instance
            .delete<DefaultResponseType>(`auth/login`)
            .then(response => response.data);
    },
}

type CaptchaResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get<CaptchaResponseType>(`security/get-captcha-url`)
            .then(response => response.data);
    }
}
