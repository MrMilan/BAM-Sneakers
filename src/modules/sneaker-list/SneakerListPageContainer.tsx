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
    const { sneakerList } = useSneakerList()

    const handleSearchChange = (value: string) => {
        setSearchValue(value)
    }

    const handleSortKeyChange = (value: SortKey) => {
        setSortKey(value)
    }

    const handleAddItem = () => {
        setIsEditItemOpen(true)
    }

    const handleSubmitChange = () => {
        setIsEditItemOpen(false)
    }

    const handleCloseDrawer = () => {
        setIsEditItemOpen(false)
    }

    return (
        <Stack
            rowGap={2}
        >
            <DrawerEditItem
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
                        />
                    ))
                }
            </Box>
        </Stack>
    )
}

export { SneakerListPageContainer }
