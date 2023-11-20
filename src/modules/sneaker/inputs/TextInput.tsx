'use client'
import { TextFieldElement, useController } from 'react-hook-form-mui'


type Props = {
    label: string
    name: string
    required?: boolean
}

const TextInput: React.FC<Props> = ({ label, name, required = false }) => {
    const { field } = useController({ name })

    return (
        <TextFieldElement
            {...field}
            label={label}
            name={name}
            variant="outlined"
            required={required}
        />
    )
}

export { TextInput }