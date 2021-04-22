import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import {
    Autocomplete,
    Button,
    Cell,
    Grid,
    Input,
    InputProps,
} from '../../atoms'
import { api } from '../../config'
import { validator } from './validator'

export interface StockFormProps {
    onSubmit(data: StockFormData): void
    defaultValues?: StockFormData
}

export interface StockFormData {
    id?: number
    symbol: string
    name: string
    amount: number
    price: number
}

interface StockModel {
    description: string
    symbol: string
}

interface InputControllerProps extends InputProps {
    control: Control<StockFormData>
    name: keyof StockFormData
    uppercase?: boolean
}

const defaultForm = {
    amount: 0,
    name: '',
    price: 0,
    symbol: '',
}

const InputController = ({
    control,
    name,
    label,
    type = 'text',
    maxLength,
    uppercase,
}: InputControllerProps) => (
    <Controller<StockFormData>
        control={control}
        name={name}
        render={({
            field: { name, onChange, onBlur, value },
            fieldState: { error },
        }) => (
            <Input
                name={name}
                label={label}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={error?.message}
                type={type}
                maxLength={maxLength}
                uppercase={uppercase}
            />
        )}
    />
)

export const StockForm = ({
    onSubmit,
    defaultValues = defaultForm,
}: StockFormProps) => {
    const { handleSubmit, control } = useForm<StockFormData>({
        mode: 'onChange',
        resolver: yupResolver(validator),
        defaultValues: defaultValues,
    })
    const [stocks, setStocks] = useState<StockModel[]>([])

    const handleSymbolChange = async (value: string) => {
        const response = await api.get<StockModel[]>(`/finnhub?symbol=${value}`)
        setStocks(response.data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid sm={2} verticalGap={3} horizontalGap={5}>
                <Cell sm={2}>
                    <Controller<StockFormData>
                        control={control}
                        name="symbol"
                        render={({
                            field: { name, onChange, value },
                            fieldState: { error },
                        }) => (
                            <Autocomplete<StockModel>
                                name={name}
                                label="Symbol"
                                onValueChange={onChange}
                                value={value}
                                error={error?.message}
                                onInputChange={handleSymbolChange}
                                maxLength={6}
                                uppercase
                                itemToString={(item) => item?.symbol || ''}
                                items={stocks}
                            />
                        )}
                    />
                </Cell>
                <Cell sm={2}>
                    <InputController
                        name="name"
                        label="Name"
                        control={control}
                    />
                </Cell>
                <Cell>
                    <InputController
                        name="amount"
                        label="Amount"
                        control={control}
                        type="number"
                    />
                </Cell>
                <Cell>
                    <InputController
                        name="price"
                        label="Price"
                        control={control}
                        type="number"
                    />
                </Cell>
                <Cell sm={2}>
                    <Button label="Add" type="submit" fullWidth />
                </Cell>
            </Grid>
        </form>
    )
}
