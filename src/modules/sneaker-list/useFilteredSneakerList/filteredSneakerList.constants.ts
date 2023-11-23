import type { FilterState, SneakerFilter } from '../filter.types'


const DEFAULT_FILTERS: SneakerFilter = {
    name: '',
    sortKey: 'year',
}

const INITIAL_STATE: FilterState = {
    sneakerList: [],
    filteredSneakerList: [],
    filters: DEFAULT_FILTERS,
}

export { DEFAULT_FILTERS, INITIAL_STATE }