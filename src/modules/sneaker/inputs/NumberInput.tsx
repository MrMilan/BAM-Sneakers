'use client'
import { TextFieldElement, useController } from 'react-hook-form-mui'


type Props = {
    label: string
    name: string
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    required?: boolean
}

const NumberInput: React.FC<Props> = ({ label, name, min= 2, max= 16, step= 0.5, required = false, disabled = false }) => {
    const { field } = useController({ name })

    return (
        <TextFieldElement
            {...field}
            label={label}
            name={name}
            type="number"
            inputProps={{ min, max, step }}
            variant="outlined"
            disabled={disabled}
            required={required}
        />
    )
}

export { NumberInput }