
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CodeIcon from '@mui/icons-material/Code'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { SortButton } from './SortButton'

import type { SortKey } from './filter.types'


type Props = {
    filterString: string
    filteredItemCount: number,
    sortKey: SortKey
    onSortKeyChange: (sortKey: SortKey) => void
}

const FilterBar: React.FC<Props> = ({ filterString, filteredItemCount, sortKey, onSortKeyChange }) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'center',
            }}
        >
            <Stack>
                {filterString && (
                    <>
                        <Typography>Search result for</Typography>
                        <Typography variant="h3">{`${filterString} (${filteredItemCount})`}</Typography>
                    </>
                )}
            </Stack>

            <Grid
                container
                alignItems="center"
                justifyContent="flex-end"
                columnGap={1}
            >
                <Typography >
                    Sort by:
                </Typography>
                <SortButton
                    title="Oldest Year"
                    icon={<CalendarTodayIcon />}
                    selected={sortKey === 'year'}
                    onClick={() => onSortKeyChange('year')}
                />
                <SortButton
                    title="Smallest size"
                    icon={<CodeIcon />}
                    selected={sortKey === 'size'}
                    onClick={() => onSortKeyChange('size')}
                />
                <SortButton
                    title="Lowest Price"
                    icon={<AttachMoneyIcon />}
                    selected={sortKey === 'price'}
                    onClick={() => onSortKeyChange('price')}
                />
            </Grid>
        </Box>
    )
}

export { FilterBar }
