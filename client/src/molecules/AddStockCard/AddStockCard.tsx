import React from 'react'
import { Card, Heading } from '../../atoms'

export interface AddStockCardProps {
    onClick(): void
}

export const AddStockCard = ({ onClick }: AddStockCardProps) => {
    return (
        <Card color="blue" onClick={onClick}>
            <Heading level={4}>Add stock...</Heading>
        </Card>
    )
}
