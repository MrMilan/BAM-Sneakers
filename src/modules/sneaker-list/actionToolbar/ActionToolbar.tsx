import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { SearchInput } from './SearchInput'


type Props = {
  searchValue: string
  onSearchChange: (searchString: string) => void
  onAddNewSneakerClick: () => void
}

const ActionToolbar: React.FC<Props> = ({ searchValue, onSearchChange, onAddNewSneakerClick }) => {
    return (
        <Grid
            container
        >
            <Grid
                item
                xs={6}
            >
                <Typography variant="h1">
                  Your collection
                </Typography>
            </Grid>
            <Grid
                item
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    alignItems: 'center',
                }}
                columnGap={1}
                xs={6}
            >
                <SearchInput
                    value={searchValue}
                    onChange={onSearchChange}
                />
                <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    onClick={onAddNewSneakerClick}
                >
                  Add new sneakers
                </Button>
            </Grid>
        </Grid>
    )
}

export { ActionToolbar }
