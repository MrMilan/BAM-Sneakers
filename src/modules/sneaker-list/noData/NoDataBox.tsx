import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


type Props = {
    message: string
}

const NoDataBox: React.FC<Props> = ({ message }) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
            width: '100%',
        }}
    >
        <Typography>
            {message}
        </Typography>
    </Box>
)

export { NoDataBox }
