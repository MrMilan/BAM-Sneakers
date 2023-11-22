import { useEffect, useState } from 'react'

import { getSneakerList } from './getSneakerList'

import type { Sneaker } from '@/types/sneaker.types'


const useSneakerList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [sneakerList, setShopList] = useState<Sneaker[]>([])

    useEffect(() => {
        const initState = async () => {
            const sneakerListResponse = await getSneakerList()
            setShopList(sneakerListResponse)
            setIsLoading(false)
        }

        initState()
        // I want call only on mounted
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { isLoading, sneakerList }
}

export { useSneakerList }
