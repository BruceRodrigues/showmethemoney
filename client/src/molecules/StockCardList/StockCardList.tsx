import React from 'react'
import { StockCard, StockCardProps } from '../'
import { Cell, Grid } from '../../atoms'

export interface StockCardListProps {
    items: StockCardProps[]
}

export const StockCardList = ({ items }: StockCardListProps) => (
    <Grid autoFit horizontalGap={5} verticalGap={5}>
        {items.map((item, index) => (
            <Cell key={index} justify="center">
                <StockCard {...item} />
            </Cell>
        ))}
    </Grid>
)
