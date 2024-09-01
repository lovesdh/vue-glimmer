import http from '@/utils/http'

export const loginAPI = ({ username, password }) => {
    return http({
        url: '/login',
        method: 'POST',
        data: {
            username, password
        }
    })
}

export const registerAPI = ({ username, password,student_ID,name,email }) => {
    return http({
        url: '/signup',
        method: 'POST',
        data: {
            username, password,student_ID,name,email
        }
    })
}

export function getRegisterCodeAPI(email) {
    return http({
        url: '/registercode',
        method: 'get', 
        params: {
        email: email 
        }
    });
}  