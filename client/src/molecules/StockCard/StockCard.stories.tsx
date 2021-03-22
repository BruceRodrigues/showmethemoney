import React from 'react'
import { StockCard } from './StockCard'

export default { title: 'Molecules/StockCard' }

const Template = ({ ...args }) => <StockCard {...args} />

export const basic = Template.bind({})
basic.args = {
    name: 'Oi LTDA',
    symbol: 'OIBR3',
    amount: 123,
    currentValue: 0.97,
    initialValue: 0.95,
}
