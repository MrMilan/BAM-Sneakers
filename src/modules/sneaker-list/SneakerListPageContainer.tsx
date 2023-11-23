'use client'
import Stack from '@mui/material/Stack'
import { useEffect, useState } from 'react'

import { ActionToolbar } from './actionToolbar/ActionToolbar'
import { useSneakerList } from './data/useSneakerList'
import { DrawerEditItem } from './DrawerEditItem'
import { FilterBar } from './filterBar/FilterBar'
import { Loading } from './Loading'
import { NoDataBoxes } from './noData/NoDataBoxes'
import { SneakerList } from './SneakerList'
import { useFilteredSneakerList } from './useFilteredSneakerList/useFilteredSneakerList'

import type { SortKey } from './filter.types'
import type { Sneaker } from '@/types/sneaker.types'


const SneakerListPageContainer: React.FC = () => {
    const { isLoading, sneakerList } = useSneakerList()

    const [isEditItemOpen, setIsEditItemOpen] = useState(false)
    const [editedSneaker, setEditedSneaker] = useState<Sneaker | null>(null)
    const [reducerState, dispatchFilter] = useFilteredSneakerList()

    useEffect(() => {
        if (!isLoading) {
            dispatchFilter({ type: 'INIT', payload: { filters: reducerState.filters, sneakerList } })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    const handleSearchChange = (value: string) =>
        dispatchFilter({ type: 'UPDATE_FILTERS', payload: { filters: { ...reducerState.filters, name: value }, sneakerList } })

    const handleSortKeyChange = (value: SortKey) =>
        dispatchFilter({ type: 'UPDATE_FILTERS', payload: { filters: { ...reducerState.filters, sortKey: value }, sneakerList } })

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
                                filteredSneakerList={reducerState.filteredSneakerList}
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
