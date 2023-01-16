import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '209375cc-5609-47e9-acf1-6a72c60cfc4c'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userID) {
        return instance
            .delete(`follow/${userID}`)
            .then(response => response.data)
    },
    follow(userID) {
        return instance
            .post(`follow/${userID}`)
            .then(response => response.data);
    },
}

export const profileAPI = {
    getProfile(userID) {
        return instance
            .get(`profile/${userID}`)
            .then(response => response.data);
    },
    getStatus(userID) {
        return instance
            .get(`profile/status/${userID}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance
            .put(`profile/status/`, {status})
            .then(response => response.data);
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance
            .put(`profile/photo/`, formData)
            .then(response => response.data);
    },
    saveProfileData(info) {
        return instance
            .put(`profile/`, info)
            .then(response => response.data);
    },
}

export const authAPI = {
    getMe() {
        return instance
            .get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance
            .post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return instance
            .delete(`auth/login`)
            .then(response => response.data);
    },
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get(`security/get-captcha-url`)
            .then(response => response.data);
    }
}
