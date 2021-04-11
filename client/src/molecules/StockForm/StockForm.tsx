import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import { Button, Cell, Grid, Input, InputProps } from '../../atoms'
import { validator } from './validator'

export interface StockFormProps {
    onSubmit(data: StockFormData): void
    defaultValues?: StockFormData
}

export interface StockFormData {
    id: number
    symbol: string
    name: string
    amount: number
    price: number
}

interface InputControllerProps extends InputProps {
    control: Control<StockFormData>
    name: keyof StockFormData
    uppercase?: boolean
}

const defaultForm = {
    id: -1,
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid sm={2} verticalGap={3} horizontalGap={5}>
                <Cell sm={2}>
                    <InputController
                        name="symbol"
                        label="Symbol"
                        control={control}
                        maxLength={6}
                        uppercase
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
