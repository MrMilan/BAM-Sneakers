'use client'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import { useEffect } from 'react'
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
    sneaker: Sneaker | null
    isEditable: boolean
    onSubmit: () => void
}

const SneakerForm: React.FC<Props> = ({ sneaker, isEditable, onSubmit }) => {
    const formContext = useForm<Sneaker>()

    useEffect(() => {
        if (sneaker) {
            formContext.reset(sneaker)
        } else {
            formContext.reset(NEW_ITEM_DEFAULT_VALUES)
        }
    }, [formContext, sneaker])

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
                    disabled={!isEditable}
                    required
                />
                <TextInput
                    label="Brand"
                    name="brand"
                    disabled={!isEditable}
                    required
                />
                <TextInput
                    label="Price"
                    name="price"
                    disabled={!isEditable}
                    required
                />
                <NumberInput
                    label="Size US"
                    name="size"
                    disabled={!isEditable}
                    required
                />
                <YearPicker
                    label="Year"
                    name="year"
                    disabled={!isEditable}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    startIcon={<AddIcon />}
                    disabled={!isEditable}
                    fullWidth
                >
                    Add new sneakers
                </Button>
            </FormWrapper>
        </FormContainer>
    )
}

export { SneakerForm }
