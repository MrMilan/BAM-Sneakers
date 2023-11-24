'use client'
import { TextFieldElement, useController } from 'react-hook-form-mui'


type Props = {
    label: string
    name: string
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    disableArrows?: boolean
    required?: boolean
}

const NumberInput: React.FC<Props> = ({ label, name, min = 2, max = 16, step = 0.5, required = false, disabled = false, disableArrows = false }) => {
    const { field } = useController({ name })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        field.onChange(event.target.value ? parseInt(event.target.value) : undefined)

    return (
        <TextFieldElement
            {...field}
            label={label}
            name={name}
            type="number"
            sx={disableArrows ?
                {
                    '& input[type=number]': {
                        MozAppearance: 'textfield',
                    },
                    '& input[type=number]::-webkit-outer-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                } : undefined
            }
            inputProps={{ min, max, step }}
            variant="outlined"
            onChange={handleChange}
            disabled={disabled}
            required={required}
        />
    )
}

export { NumberInput }