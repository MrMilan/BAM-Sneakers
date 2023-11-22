
import type { Sneaker } from '@/types/sneaker.types'

import { api } from '@/api'


const getSneakerList = async () => {
    const response = await api.get('/sneakers')
    const sneakerList: Sneaker[] = response?.responseData ?? []
    return sneakerList
}

export { getSneakerList }