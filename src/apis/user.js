import http from '@/utils/http'

export const loginAPI = ({ userName, password }) => {
    return http({
        url: '/login',
        method: 'POST',
        data: {
            userName, password
        }
    })
}

export const registerAPI = ({ userName, password,student_ID,name,phone,email }) => {
    return http({
        url: '/signup',
        method: 'POST',
        data: {
            userName, password,student_ID,name,phone,email
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