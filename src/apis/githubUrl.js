import http from '@/utils/http'

export const githubUrlAPI = ({ url,field,id }) => {
    return http({
        url: '/problem',
        method: 'POST',
        data: {
            url,field,id
        }
    })
}
