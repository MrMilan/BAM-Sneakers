import { useReducer } from 'react'

import { DEFAULT_FILTERS, INITIAL_STATE } from './filteredSneakerList.constants'
import { getFilteredSneakers } from './filteredSneakerList.utils'

import type { FilterActions, FilterState } from '../filter.types'


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
    return useReducer(appReducer, INITIAL_STATE)
}

export { useFilteredSneakerList }