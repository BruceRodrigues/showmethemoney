import React from 'react'
import { Story } from '../../utils'
import { Card, CardProps } from './Card'

export default { title: 'Atoms/Card' }

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />

export const Red = Template.bind({})
Red.args = {
    color: 'red',
    children: <div style={{ height: '100px', width: '200px' }}>Content...</div>,
}

export const Blue = Template.bind({})
Blue.args = {
    ...Red.args,
    color: 'blue',
}

export const Yellow = Template.bind({})
Yellow.args = {
    ...Red.args,
    color: 'yellow',
}

export const Green = Template.bind({})
Green.args = {
    ...Red.args,
    color: 'green',
}
