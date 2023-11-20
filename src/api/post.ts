import * as api from './api'

import type { Params } from './types'


const post = async <TResponse>(path: string, params: Params) => {
    const result = await api.post<TResponse>(path, null, params)
    return result
}

export { post }
