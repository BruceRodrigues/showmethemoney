import React from 'react'
import { Pill } from '.'
import { PillProps } from './Pill'

export default { title: 'Atoms/Pill' }

const Template = ({ ...args }: PillProps) => <Pill {...args} />

export const Basic = Template.bind({})
Basic.args = {
    value: 10,
}
