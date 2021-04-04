import React from 'react'
import { Story } from '../../utils/stories'
import { Input, InputProps } from './Input'

export default { title: 'Atoms/Input' }

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />

export const basic = Template.bind({})
basic.args = {
    name: 'firstName',
    label: 'First name',
}
