import { useReducer } from 'react'

import type { FilterActions, FilterState, SneakerFilter, SortKey } from './filter.types'
import type { Sneaker } from '@/types/sneaker.types'


const DEFAULT_FILTERS: SneakerFilter = {
    name: '',
    sortKey: 'year',
}

const INITIAL_STATE: FilterState = {
    sneakerList: [],
    filteredSneakerList: [],
    filters: DEFAULT_FILTERS,
}

const sort = (sneakerA: Sneaker, sneakerB: Sneaker, sortKey: SortKey) => {
    const innerSortKey: keyof Sneaker = sortKey
    const valueA = sneakerA[innerSortKey]
    const valueB = sneakerB[innerSortKey]
    const ascDescByKey = sortKey === 'year' ? 1 : -1
    if (valueA < valueB) {
        return -1 * ascDescByKey
    }
    if (valueA > valueB) {
        return 1 * ascDescByKey
    }
    return 0
}

const getFilteredSneakers = (sneakerList: Sneaker[], filters: SneakerFilter) =>
    sneakerList
        .filter(sneaker =>
            filters.name.toLocaleLowerCase() ? sneaker.name.toLocaleLowerCase().includes(filters.name) : true
        )
        .sort((sneakerA, sneakerB) =>
            sort(sneakerA, sneakerB, filters.sortKey)
        )

const appReducer = (state: FilterState, action: FilterActions) => {
    switch (action.type) {
        case 'INIT':
            return {
                filters: action.payload.filters,
                sneakerList: action.payload.sneakerList,
                filteredSneakerList: getFilteredSneakers(action.payload.sneakerList, action.payload.filters),
            } satisfies FilterState
        case 'UPDATE_FILTERS':
            return {
                ...state,
                filters: action.payload.filters,
                filteredSneakerList: getFilteredSneakers(action.payload.sneakerList, action.payload.filters),
            } satisfies FilterState
        default:
            return {
                sneakerList: state.sneakerList,
                filteredSneakerList: state.sneakerList,
                filters: DEFAULT_FILTERS,
            } satisfies FilterState
    }
}

const useFilteredSneakerList = () => {


    const filtersReducer = useReducer(appReducer, INITIAL_STATE)
    return filtersReducer
}

export { useFilteredSneakerList }