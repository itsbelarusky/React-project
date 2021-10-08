import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d52405ad-e4bc-4e26-b3f7-492e8f23c4bf"
    }
})
export const friendsAPI = {
    getFriends(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getMain(userId) {
        return instance.get(`profile/` + userId)

    }

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}



