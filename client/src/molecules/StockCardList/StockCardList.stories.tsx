import React from 'react'
import { Story } from '../../utils'
import { StockCardList, StockCardListProps } from './StockCardList'

export default { title: 'Molecules/StockCardList' }

const Template: Story<StockCardListProps> = (args: StockCardListProps) => (
    <StockCardList {...args} />
)

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
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {},
}
