import React from 'react'
import { StockItem, StockItemProps } from '..'
import { Cell, Grid } from '../../atoms'

export interface StockListProps {
    items: StockItemProps[]
    onClick?(item: StockItemProps): void
}

export const StockList = ({ items, onClick }: StockListProps) => (
    <Grid sm={1} verticalGap={6} className="mt-4">
        {items.map((item, index) => (
            <Cell key={index}>
                <StockItem {...item} onClick={() => onClick && onClick(item)} />
            </Cell>
        ))}
    </Grid>
)
