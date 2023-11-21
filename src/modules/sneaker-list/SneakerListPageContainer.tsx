'use client'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useState } from 'react'

import { ActionToolbar } from './actionToolbar/ActionToolbar'
import { SneakerCard } from './card/SneakerCard'
import { useSneakerList } from './data/useSneakerList'
import { DrawerEditItem } from './DrawerEditItem'
import { FilterBar } from './FilterBar/FilterBar'

import type { SortKey } from './FilterBar/types'
import type { Sneaker } from '@/types/sneaker.types'


const SneakerListPageContainer: React.FC = () => {
    const [isEditItemOpen, setIsEditItemOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [sortKey, setSortKey] = useState<SortKey>('year')
    const [editedSneaker, setEditedSneaker] = useState<Sneaker | null>(null)
    const { sneakerList } = useSneakerList()

    const handleSearchChange = (value: string) => {
        setSearchValue(value)
    }

    const handleSortKeyChange = (value: SortKey) => {
        setSortKey(value)
    }

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
                searchValue={searchValue}
                onAddNewSneakerClick={handleAddItem}
                onSearchChange={handleSearchChange}
            />
            <FilterBar
                filterString=""
                filteredItemCount={0}
                sortKey={sortKey}
                onSortKeyChange={handleSortKeyChange}
            />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    alignItems: 'center',
                    columnGap: 2,
                }}
            >
                {
                    sneakerList.map(sneaker => (
                        <SneakerCard
                            key={sneaker.id}
                            sneaker={sneaker}
                            onDeleteClick={handleDeleteClick}
                        />
                    ))
                }
            </Box>
        </Stack>
    )
}

export { SneakerListPageContainer }
