import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from "@/utils/auth";
import { login } from "@/api/user"

export const adminStore = defineStore('admin',{
    state: () => {
        return {
            token: getToken(),
            id: '',
            userName: '',
            avatarUrl: ''
        }
    },
    getters: {},
    actions: {
        // 登录
        login(userInfo) {
            const username = userInfo.userName.trim();
            const password = userInfo.password;
            return new Promise((resolve, reject) => {
                login({username, password})
                    .then(res => {
                        setToken(res.token);
                        this.token = res.token;
                        this.avatarUrl = res.avatarUrl;
                        this.userName = username;
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
    }
})
