import React from 'react'
import { Story } from '../../utils'
import { StockItem, StockItemProps } from './StockItem'

export default { title: 'Molecules/StockItem' }

const Template: Story<StockItemProps> = (args: StockItemProps) => (
    <StockItem {...args} />
)

export const basic = Template.bind({})
basic.args = {
    name: 'Oi LTDA',
    symbol: 'OIBR3',
    amount: 123,
    currentValue: 0.97,
    initialValue: 0.95,
}
