import { useReducer } from 'react'

import type { FilterActions, FilterState, SneakerFilter, SortKey } from './filter.types'
import type { Sneaker } from '@/types/sneaker.types'


const DEFAULT_FILTERS: SneakerFilter = {
    name: '',
    sortKey: 'year',
}

const sort = (sneakerA: Sneaker, sneakerB: Sneaker, sortKey: SortKey) => {
    const innerSortKey: keyof Sneaker = sortKey
    const valueA = sneakerA[innerSortKey]
    const valueB = sneakerB[innerSortKey]
    if (valueA < valueB) {
        return -1
    }
    if (valueA > valueB) {
        return 1
    }
    return 0
}

const appReducer = (state: FilterState, action: FilterActions) => {
    switch (action.type) {
        case 'UPDATE_FILTERS':
            return {
                ...state,
                filters: action.payload.filters,
                filteredSneakerList: state.sneakerList
                    .filter(sneaker =>
                        action.payload.filters.name ? sneaker.name.includes(action.payload.filters.name) : true
                    )
                    .sort((sneakerA, sneakerB) =>
                        sort(sneakerA, sneakerB, action.payload.filters.sortKey)
                    ),
            } satisfies FilterState
        default:
            return {
                sneakerList: state.sneakerList,
                filteredSneakerList: state.sneakerList,
                filters: DEFAULT_FILTERS,
            } satisfies FilterState
    }
}

const useFilteredSneakerList = (sneakerList: Sneaker[]) => {
    const initialState: FilterState = {
        sneakerList: sneakerList,
        filteredSneakerList: sneakerList,
        filters: DEFAULT_FILTERS,
    }

    const filtersReducer = useReducer(appReducer, initialState)
    return filtersReducer
}

export { useFilteredSneakerList }