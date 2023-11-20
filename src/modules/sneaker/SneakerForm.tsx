'use client'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import { FormContainer } from 'react-hook-form-mui'

import { FormWrapper } from './FormWrapper'
import { NumberInput } from './inputs/NumberInput'
import { TextInput } from './inputs/TextInput'
import { YearPicker } from './inputs/YearPicker'

import type { Sneaker } from '@/types/sneaker.types'

import { api } from '@/api'


const NEW_ITEM_DEFAULT_VALUES: Partial<Sneaker> = {
    name: undefined,
    brand: undefined,
    price: undefined,
    size: undefined,
    year: undefined,
}

type Props = {
    onSubmit: ()=> void
}

const SneakerForm: React.FC<Props> = ({ onSubmit }) => {

    const formContext = useForm<Sneaker>({ defaultValues: NEW_ITEM_DEFAULT_VALUES })

    const handleSaveClick = formContext.handleSubmit(async (data) => {
        api.post('/sneakers', data)
        onSubmit()
    })

    return (
        <FormContainer
            formContext={formContext}
            handleSubmit={handleSaveClick}
        >
            <FormWrapper>
                <TextInput
                    label="Name"
                    name="name"
                    required
                />
                <TextInput
                    label="Brand"
                    name="brand"
                    required
                />
                <TextInput
                    label="Price"
                    name="price"
                    required
                />
                <NumberInput
                    label="Size US"
                    name="size"
                    required
                />
                <YearPicker
                    label="Year"
                    name="year"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    startIcon={<AddIcon/>}
                    fullWidth
                >
                    Add new sneakers
                </Button>
            </FormWrapper>
        </FormContainer>
    )
}

export { SneakerForm }
