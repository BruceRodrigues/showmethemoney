import React from 'react'
import { Pill } from '.'
import { Story } from '../../utils'
import { PillProps } from './Pill'

export default { title: 'Atoms/Pill' }

const Template: Story<PillProps> = (args: PillProps) => <Pill {...args} />

export const Positive = Template.bind({})
Positive.args = {
    value: 10.1,
}

export const Negative = Template.bind({})
Negative.args = {
    value: -10.8,
}
