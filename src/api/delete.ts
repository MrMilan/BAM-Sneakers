import * as api from './api'


const apiDelete = async (path: string, id: number) => {
    const getRequestUrl = `${path}/${id}`
    const result = await api.deleteApi(getRequestUrl, null)
    return result
}


export { apiDelete }