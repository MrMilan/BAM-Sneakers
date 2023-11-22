import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


type Props = {
    value: string | number
    label: string
}

const SneakerTileInfo: React.FC<Props> = ({ value, label }) => {
    return (
        <Stack>
            <Typography fontWeight="bold">
                {value}
            </Typography>
            <Typography >
                {label}
            </Typography>
        </Stack>
    )
}

export { SneakerTileInfo }
