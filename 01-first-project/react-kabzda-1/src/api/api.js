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
    }
}
