import DeleteIcon from '@mui/icons-material/Delete'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'

import { SneakerTileInfo } from './SneakerTileInfo'

import type { Sneaker } from '@/types/sneaker.types'


type Props = {
    sneaker: Sneaker
}

const SneakerCard: React.FC<Props> = ({ sneaker }) => (
    <Card>
        <CardHeader
            title={sneaker.name}
            subheader={sneaker.brand}
            action={
                <IconButton onClick={() => {}}>
                    <DeleteIcon />
                </IconButton>
            }
        />
        <CardContent>
            <Grid
                container
                columnGap={2}
            >
                <Grid
                    item
                    xs
                >
                    <SneakerTileInfo
                        value={sneaker.year}
                        label="Year"
                    />
                </Grid>

                <Divider
                    orientation="vertical"
                    flexItem
                />
                <Grid
                    item
                    xs
                >
                    <SneakerTileInfo
                        value={sneaker.size}
                        label="Size US"
                    />
                </Grid>

                <Divider
                    orientation="vertical"
                    flexItem
                />
                <Grid
                    item
                    xs
                >
                    <SneakerTileInfo
                        value={sneaker.price}
                        label="Price"
                    />
                </Grid>
            </Grid>
        </CardContent>
    </Card >
)


export { SneakerCard }
