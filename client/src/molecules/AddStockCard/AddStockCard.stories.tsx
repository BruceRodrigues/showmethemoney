import React from 'react'
import { Story } from '../../utils'
import { AddStockCard, AddStockCardProps } from './AddStockCard'

export default { title: 'Molecules/AddStockCard' }

const Template: Story<AddStockCardProps> = (args: AddStockCardProps) => (
    <AddStockCard {...args} />
)

export const basic = Template.bind({})
basic.args = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClick: () => {},
}
