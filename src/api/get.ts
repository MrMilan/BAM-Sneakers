import * as api from './api'

import type { Params } from './types'


const get = async (path: string, params?: Params) => {
    const getParams = params ?
        Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&') : ''
    const getRequestUrl = `${path}${getParams.length ? `?${getParams}` : ''}`
    const result = await api.get(getRequestUrl, null)
    return result
}


export { get }