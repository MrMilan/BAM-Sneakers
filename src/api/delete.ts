import * as api from './api'


const apiDelete = async (path: string, id: number | string) => {
    const getRequestUrl = `${path}/${id}`
    const result = await api.apiDelete(getRequestUrl, null)
    return result
}


export { apiDelete }