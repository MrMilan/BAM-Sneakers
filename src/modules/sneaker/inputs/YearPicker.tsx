'use client'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useController } from 'react-hook-form-mui'


type Props = {
    label: string
    name: string
    disabled?: boolean
    required?: boolean
}

const YearPicker: React.FC<Props> = ({ label, name, disabled = false, required = false }) => {
    const { field, fieldState } = useController({
        name,
        rules: {
            validate: (value) => {
                if (!required) {
                    return undefined
                }
                return !value ? 'This field is required' : undefined
            },
        },
    })

    const handleChange = (value: dayjs.Dayjs | null) =>
        field.onChange(value?.format('YYYY'))

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={required ? `${label} *` : label}
                inputRef={field.ref}
                views={['year']}
                value={field.value ? dayjs(field.value) : null}
                slotProps={{
                    textField: {
                        error: !!fieldState.error,
                        helperText: fieldState.error?.message,
                    },
                }}
                onChange={handleChange}
                disabled={disabled}
            />
        </LocalizationProvider>
    )
}

export { YearPicker }