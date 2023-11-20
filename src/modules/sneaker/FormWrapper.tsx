import { Stack } from '@mui/material'


const FormWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Stack
        padding={1}
        rowGap={1}
    >
        {children}
    </Stack>
)

export { FormWrapper }
