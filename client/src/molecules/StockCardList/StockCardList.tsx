import React from 'react'
import { StockCard, StockCardProps } from '../'
import { Cell, Grid } from '../../atoms'

interface StockCardListProps {
    items: StockCardProps[]
}

export const StockCardList = ({ items }: StockCardListProps) => (
    <Grid sm={1} md={3}>
        {items.map((item, index) => (
            <Cell key={index}>
                <StockCard {...item} />
            </Cell>
        ))}
    </Grid>
)
