import http from '@/utils/http'

export const uploadLinkAPI = ({ url,field,id }) => {
    return http({
        url: '/problem',
        method: 'POST',
        data: {
            url,field,id
        }
    })
}
