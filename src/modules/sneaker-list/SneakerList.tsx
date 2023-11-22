'use client'

import Box from '@mui/material/Box'

import { SneakerCard } from './card/SneakerCard'

import type { Sneaker } from '@/types/sneaker.types'


type Props = {
    filteredSneakerList: Sneaker[]
    onDeleteClick: (sneaker: Sneaker) => void
}

const SneakerList: React.FC<Props> = ({ filteredSneakerList, onDeleteClick }) => (
    <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            alignItems: 'center',
            columnGap: 2,
        }}
    >
        {
            filteredSneakerList.map(sneaker => (
                <SneakerCard
                    key={sneaker.id}
                    sneaker={sneaker}
                    onDeleteClick={onDeleteClick}
                />
            ))
        }
    </Box>
)

export { SneakerList }
