import { useCallback, useEffect, useState } from 'react'

import { getSneakerList } from './getSneakerList'

import type { Sneaker } from '@/types/sneaker.types'


const useSneakerList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [sneakerList, setShopList] = useState<Sneaker[]>([])

    const refresh = useCallback(async () => {
        setIsLoading(true)
        const sneakerListResponse = await getSneakerList()
        setShopList(sneakerListResponse)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        refresh()
        // I want call only on mounted
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { isLoading, refresh, sneakerList }
}

export { useSneakerList }
