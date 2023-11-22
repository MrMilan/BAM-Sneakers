import Box from '@mui/material/Box/Box'
import CircularProgress from '@mui/material/CircularProgress'


const Loading: React.FC = () => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            inset: 0,
        }}
    >
        <CircularProgress />
    </Box>
)

export { Loading }
