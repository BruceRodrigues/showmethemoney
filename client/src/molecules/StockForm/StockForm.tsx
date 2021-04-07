import React from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import { Button, Cell, Grid, Input } from '../../atoms'

export interface StockFormProps {
    onSubmit(data: StockFormData): void
}

export interface StockFormData {
    symbol: string
    name: string
    amount: string
    price: string
}

const InputController = ({
    control,
    name,
    label,
}: {
    control: Control<StockFormData>
    name: keyof StockFormData
    label: string
}) => (
    <Controller<StockFormData>
        control={control}
        name={name}
        render={({ field: { name, onChange, onBlur, value } }) => (
            <Input
                name={name}
                label={label}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
        )}
    />
)

export const StockForm = ({ onSubmit }: StockFormProps) => {
    const { handleSubmit, control } = useForm<StockFormData>({
        mode: 'onChange',
        defaultValues: {
            amount: '',
            name: '',
            price: '',
            symbol: '',
        },
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid sm={2} verticalGap={3} horizontalGap={5}>
                <Cell sm={2}>
                    <InputController
                        name="symbol"
                        label="Symbol"
                        control={control}
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
                    />
                </Cell>
                <Cell>
                    <InputController
                        name="price"
                        label="Price"
                        control={control}
                    />
                </Cell>
                <Cell sm={2}>
                    <Button label="Add" type="submit" fullWidth />
                </Cell>
            </Grid>
        </form>
    )
}
