import React from 'react'
import { Story } from '../../utils'
import { StockCard, StockCardProps } from './StockCard'

export default { title: 'Molecules/StockCard' }

const Template: Story<StockCardProps> = (args: StockCardProps) => (
    <StockCard {...args} />
)

export const basic = Template.bind({})
basic.args = {
    name: 'Oi LTDA',
    symbol: 'OIBR3',
    amount: 123,
    currentValue: 0.97,
    initialValue: 0.95,
}
