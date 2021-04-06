import React from 'react'
import { StockCard, StockCardProps } from '../'
import { Cell, Grid } from '../../atoms'
import { AddStockCard } from '../AddStockCard'

export interface StockCardListProps {
    items: StockCardProps[]
    onClick(): void
}

export const StockCardList = ({ items, onClick }: StockCardListProps) => (
    <Grid autoFit horizontalGap={5} verticalGap={5}>
        {items.map((item, index) => (
            <Cell key={index} justify="center">
                <StockCard {...item} />
            </Cell>
        ))}
        <Cell>
            <AddStockCard onClick={onClick} />
        </Cell>
    </Grid>
)
