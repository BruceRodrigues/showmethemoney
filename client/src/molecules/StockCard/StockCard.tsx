import React from 'react'
import {
    Card,
    Cell,
    Color,
    Direction,
    Grid,
    Heading,
    Pill,
    Text,
} from '../../atoms'

export interface StockCardProps extends React.HTMLProps<HTMLDivElement> {
    name: string
    symbol: string
    amount: number
    currentValue: number
    initialValue: number
}

const textStyles = ['w-full', 'truncate', 'text-right']

const calcProps = (
    initialValue: number,
    currentValue: number
): { direction: Direction; color: Color } => {
    const props =
        initialValue < currentValue
            ? { direction: 'up' as Direction, color: 'green' as Color }
            : initialValue === currentValue
            ? { direction: 'equal' as Direction, color: 'yellow' as Color }
            : { direction: 'down' as Direction, color: 'red' as Color }
    return props
}

export const StockCard = ({
    name,
    symbol,
    amount,
    currentValue,
    initialValue,
}: StockCardProps) => {
    const props = calcProps(initialValue, currentValue)
    const total = +(currentValue * amount - initialValue * amount).toFixed(2)

    return (
        <Card color={props.color}>
            <Grid sm={2}>
                <Cell>
                    <Heading level={5}>{symbol}</Heading>
                    <div className="flex items-center gap-3">
                        <Pill value={total} />
                    </div>
                </Cell>
                <div className="flex flex-col items-end justify-around">
                    <Text classes={textStyles} size="xs">
                        {name}
                    </Text>
                    <Text size="sm">{initialValue}</Text>
                    <Text size="sm">{amount}</Text>
                </div>
            </Grid>
        </Card>
    )
}
