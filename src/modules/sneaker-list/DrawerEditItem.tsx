import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import type { Sneaker } from '@/types/sneaker.types'

import { api } from '@/api'
import { SneakerForm } from '@/modules/sneaker/SneakerForm'


type Props = {
    isDrawerOpen: boolean
    sneaker: Sneaker | null
    onSubmit: () => void
    onDelete: () => void
    onClose: () => void
}

const DrawerEditItem: React.FC<Props> = ({ isDrawerOpen, sneaker, onSubmit, onDelete, onClose }) => {

    const defaultSneakerValues = sneaker
    const isSneakerEditable = !sneaker

    const handleDeleteClick = async (id: string) => {
        await api.delete('/sneakers', id)
        onDelete()
    }

    return (
        <Drawer
            anchor="right"
            open={isDrawerOpen}
            variant="persistent"
            PaperProps={{
                sx: {
                    backgroundColor: ({ palette }) => palette.common.white,
                    minWidth: 500,
                    maxWidth: 524,
                    padding: 3,
                },
            }}
        >
            <Grid
                container
            >
                <Grid
                    item
                    xs={11}
                >
                    <Typography
                        variant="h2"
                        gutterBottom
                    >
                        {!sneaker ? 'Add sneakers to your collection' : sneaker.name}
                    </Typography>
                </Grid>
                <Grid
                    item
                >
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <SneakerForm
                sneaker={defaultSneakerValues}
                isEditable={isSneakerEditable}
                onSubmit={onSubmit}
            />
            {!isSneakerEditable && (
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    fullWidth
                    onClick={() => handleDeleteClick(sneaker._id)}
                >
                    Delete
                </Button>
            )}
        </Drawer>
    )
}

export { DrawerEditItem }
