'use client'
import Stack from '@mui/material/Stack'
import { useState } from 'react'

import { ActionToolbar } from './actionToolbar/ActionToolbar'
import { useSneakerList } from './data/useSneakerList'
import { DrawerEditItem } from './DrawerEditItem'
import { FilterBar } from './filterBar/FilterBar'
import { useFilteredSneakerList } from './filterBar/useFilteredSneakerList'
import { Loading } from './Loading'
import { NoDataBoxes } from './noData/NoDataBoxes'
import { SneakerList } from './SneakerList'

import type { SortKey } from './filterBar/filter.types'
import type { Sneaker } from '@/types/sneaker.types'


const SneakerListPageContainer: React.FC = () => {
    const [isEditItemOpen, setIsEditItemOpen] = useState(false)
    const [editedSneaker, setEditedSneaker] = useState<Sneaker | null>(null)
    const { isLoading, sneakerList } = useSneakerList()
    const [reducerState, dispatchFilter] = useFilteredSneakerList(sneakerList)

    const handleSearchChange = (value: string) =>
        dispatchFilter({ type: 'UPDATE_FILTERS', payload: { filters: { ...reducerState.filters, name: value } } })

    const handleSortKeyChange = (value: SortKey) =>
        dispatchFilter({ type: 'UPDATE_FILTERS', payload: { filters: { ...reducerState.filters, sortKey: value } } })

    const handleAddItem = () => {
        setEditedSneaker(null)
        setIsEditItemOpen(true)
    }

    const handleSubmitChange = () => {
        setIsEditItemOpen(false)
        setEditedSneaker(null)
    }

    const handleCloseDrawer = () => {
        setIsEditItemOpen(false)
        setEditedSneaker(null)
    }

    const handleDeleteClick = (sneaker: Sneaker) => {
        setEditedSneaker(sneaker)
        setIsEditItemOpen(true)
    }

    return (
        <Stack
            rowGap={2}
        >
            <DrawerEditItem
                sneaker={editedSneaker}
                isDrawerOpen={isEditItemOpen}
                onSubmit={handleSubmitChange}
                onClose={handleCloseDrawer}
            />
            <ActionToolbar
                searchValue={reducerState.filters.name}
                onAddNewSneakerClick={handleAddItem}
                onSearchChange={handleSearchChange}
            />
            <FilterBar
                filterString={reducerState.filters.name}
                filteredItemCount={0}
                sortKey={reducerState.filters.sortKey}
                onSortKeyChange={handleSortKeyChange}
            />
            {
                isLoading ?
                    (
                        <Loading />
                    )
                    :
                    (
                        <>
                            <SneakerList
                                filteredSneakerList={sneakerList}
                                onDeleteClick={handleDeleteClick}
                            />
                            <NoDataBoxes reducerState={reducerState} />
                        </>
                    )
            }
        </Stack>
    )
}

export { SneakerListPageContainer }
