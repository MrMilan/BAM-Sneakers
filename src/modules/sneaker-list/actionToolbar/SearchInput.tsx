import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

import type { TextFieldProps } from '@mui/material/TextField'


type Props = {
    value: string
    label?: string
    onChange: (value: string) => void
} & Omit<TextFieldProps, 'onChange'>

const SearchInput: React.FC<Props> = ({ value, label, onChange, ...restProps }) => (
    <TextField
        label={label}
        value={value}
        placeholder="Search"
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(event.target.value)}
        variant="outlined"
        fullWidth
        {...restProps}
    />
)

export { SearchInput }
