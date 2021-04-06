import React from 'react'
import { useForm } from 'react-hook-form'
import { Cell, Grid, Input } from '../../atoms'

export interface StockFormProps {
    onSubmit(data: StockFormData): void
}

export interface StockFormData {
    symbol: string
    name: string
    amount: string
    price: string
}

export const StockForm = ({ onSubmit }: StockFormProps) => {
    const { handleSubmit, register } = useForm<StockFormData>()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid sm={2} verticalGap={3} horizontalGap={5}>
                <Cell sm={2}>
                    <Input {...register('symbol')} label="Symbol" />
                </Cell>
                <Cell sm={2}>
                    <Input {...register('name')} label="Name" />
                </Cell>
                <Cell>
                    <Input {...register('amount')} label="Amount" />
                </Cell>
                <Cell>
                    <Input {...register('price')} label="Price" />
                </Cell>
                <Cell>
                    <input type="submit" />
                </Cell>
            </Grid>
        </form>
    )
}
