import React from 'react'
import { Content, Grid, Pill } from '../../atoms'
import { css } from '../../utils'

export interface StockItemProps {
    id?: number
    symbol: string
    name: string
    amount: number
    currentValue: number
    initialValue: number
    onClick?(): void
}

const columnLabelStyles = [
    'uppercase ',
    'text-gray-800',
    'font-sans',
    'mb-2',
    'text-xs',
]
const columnValueStyles = ['font-semibold', 'font-mono', 'overflow-ellipsis']

export const Column = ({
    label,
    value,
    positive,
}: {
    label: string
    value: string | number
    positive: boolean
}) => (
    <div className="column flex flex-col">
        <span className={css(columnLabelStyles)}>{label}</span>
        <span
            className={css(columnValueStyles, {
                if: positive,
                true: 'text-green-600',
                false: 'text-red-600',
            })}
        >
            {value}
        </span>
    </div>
)

export const StockItem = ({
    symbol,
    name,
    amount,
    currentValue,
    initialValue,
    onClick,
}: StockItemProps) => {
    const total = +(currentValue * amount - initialValue * amount).toFixed(2)
    const positive = total > 0
    return (
        <Content
            onClick={onClick}
            className={`cursor-pointer ${
                positive ? 'hover:bg-green-200' : 'hover:bg-red-200'
            }`}
        >
            <Grid sm={5}>
                <Column label="Symbol" value={symbol} positive={positive} />
                <Column label="Name" value={name} positive={positive} />
                <Column label="Amount" value={amount} positive={positive} />
                <Column
                    label="Initial value"
                    value={initialValue}
                    positive={positive}
                />
                <Pill value={total} />
            </Grid>
        </Content>
    )
}
