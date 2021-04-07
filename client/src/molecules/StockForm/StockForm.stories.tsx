import React from 'react'
import { Story } from '../../utils/stories'
import { StockForm, StockFormProps } from './'

export default { title: 'Molecules/StockForm' }

const Template: Story<StockFormProps> = (args: StockFormProps) => (
    <StockForm {...args} />
)

export const basic = Template.bind({})
