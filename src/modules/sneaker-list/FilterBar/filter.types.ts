import type { Sneaker } from '@/types/sneaker.types'


type SortKey = 'year' | 'size' | 'price'

type SneakerFilter = {
    name: string
    sortKey: SortKey
}

type FilterState = {
    sneakerList: Sneaker[],
    filteredSneakerList: Sneaker[],
    filters: SneakerFilter
}

type FilterActionTypes = 'UPDATE_FILTERS'

type FilterActions = {
    type: FilterActionTypes,
    payload: {
        filters: SneakerFilter
    }
}

export type { FilterState, FilterActions, SneakerFilter, SortKey }