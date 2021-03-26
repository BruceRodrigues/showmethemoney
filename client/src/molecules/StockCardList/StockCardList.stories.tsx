import React from 'react'
import { StockCardList } from './StockCardList'

export default { title: 'Molecules/StockCardList' }

const Template = (args) => <StockCardList {...args} />

const item = {
    name: 'Oi LTDA',
    symbol: 'OIBR3',
    amount: 123,
    currentValue: 0.97,
    initialValue: 0.95,
}

export const basic = Template.bind({})
basic.args = {
    items: Array.of(item, item, item, item, item),
}
