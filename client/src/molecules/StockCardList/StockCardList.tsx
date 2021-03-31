import React from 'react'
import { StockCard, StockCardProps } from '../'
import { Cell, Grid } from '../../atoms'

export interface StockCardListProps {
    items: StockCardProps[]
}

export const StockCardList = ({ items }: StockCardListProps) => (
    <Grid sm={1} md={3} lg={4} horizontalGap={5} verticalGap={5}>
        {items.map((item, index) => (
            <Cell key={index}>
                <StockCard {...item} />
            </Cell>
        ))}
    </Grid>
)
