'use client'
import { TextFieldElement, useController } from 'react-hook-form-mui'


type Props = {
    label: string
    name: string
    disabled?: boolean
    required?: boolean
}

const TextInput: React.FC<Props> = ({ label, name, disabled = false, required = false }) => {
    const { field } = useController({ name })

    return (
        <TextFieldElement
            {...field}
            label={label}
            name={name}
            variant="outlined"
            disabled={disabled}
            required={required}
        />
    )
}

export { TextInput }