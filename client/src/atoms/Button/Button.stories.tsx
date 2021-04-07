import React from 'react'
import { Story } from '../../utils'
import { Button, ButtonProps } from './Button'

export default { title: 'Atoms/Button' }

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />

export const basic = Template.bind({})
basic.args = {
    label: 'Button',
    type: 'button',
}

export const fullWidth = Template.bind({})
fullWidth.args = {
    label: 'Button',
    type: 'button',
    fullWidth: true,
}
