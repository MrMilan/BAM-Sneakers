import CloseIcon from '@mui/icons-material/Close'
import Drawer from '@mui/material/Drawer'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { SneakerForm } from '@/modules/sneaker/SneakerForm'


type Props = {
    isDrawerOpen: boolean
    onSubmit: ()=> void
    onClose: ()=> void
}

const DrawerEditItem: React.FC<Props> = ({ isDrawerOpen, onSubmit, onClose }) => (
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
                    Add sneakers to your collection
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
        <SneakerForm onSubmit={onSubmit}/>
    </Drawer>
)

export { DrawerEditItem }
