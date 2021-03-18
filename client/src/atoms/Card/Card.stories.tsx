import React from 'react'
import { Card } from './Card'

export default { title: 'Atoms/Card' }

const Template = ({ ...args }) => <Card {...args} />

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
