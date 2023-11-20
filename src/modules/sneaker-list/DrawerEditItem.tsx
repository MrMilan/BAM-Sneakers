import CloseIcon from '@mui/icons-material/Close'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import type { Sneaker } from '@/types/sneaker.types'

import { SneakerForm } from '@/modules/sneaker/SneakerForm'


const NEW_ITEM_DEFAULT_VALUES: Partial<Sneaker> = {
    name: undefined,
    brand: undefined,
    price: undefined,
    size: undefined,
    year: undefined,
}

type Props = {
    isDrawerOpen: boolean
    sneaker: Sneaker| null
    onSubmit: ()=> void
    onClose: ()=> void
}

const DrawerEditItem: React.FC<Props> = ({ isDrawerOpen, sneaker, onSubmit, onClose }) => {

    const defaultSneakerValues = sneaker ?? NEW_ITEM_DEFAULT_VALUES
    const isSneakerEditable = !sneaker

    return (
        <Drawer
            anchor="right"
            open={isDrawerOpen}
            variant="persistent"
            PaperProps={{
                sx: {
                    backgroundColor: ({ palette }) => palette.common.white,
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
        </Drawer>
    )}

export { DrawerEditItem }
