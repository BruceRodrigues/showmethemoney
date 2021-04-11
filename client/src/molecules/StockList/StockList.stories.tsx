import React from 'react'
import { Story } from '../../utils'
import { StockList, StockListProps } from './StockList'

export default { title: 'Molecules/StockList' }

const Template: Story<StockListProps> = (args: StockListProps) => (
    <StockList {...args} />
)

export const basic = Template.bind({})
basic.args = {
    items: [
        {
            name: 'Oi LTDA',
            symbol: 'OIBR3',
            amount: 123,
            currentValue: 0.97,
            initialValue: 0.95,
        },
        {
            name: 'Oi LTDA',
            symbol: 'OIBR3',
            amount: 123,
            currentValue: 0.97,
            initialValue: 0.95,
        },
    ],
}
