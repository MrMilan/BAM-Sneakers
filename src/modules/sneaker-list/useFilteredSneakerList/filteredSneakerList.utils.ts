import type { SneakerFilter, SortKey } from '../filter.types'
import type { Sneaker } from '@/types/sneaker.types'


const sneakerFilter = (filters: SneakerFilter) => (sneaker: Sneaker) =>
    filters.name ? sneaker.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase()) : true


const sneakerComparator = (sortKey: SortKey) => (sneakerA: Sneaker, sneakerB: Sneaker) => {
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
    sneakerList.filter(sneakerFilter(filters)).sort(sneakerComparator(filters.sortKey))

export { getFilteredSneakers }