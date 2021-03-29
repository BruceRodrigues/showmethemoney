import React from 'react'
import { Arrow, ArrowProps } from './Arrow'

export default { title: 'Atoms/Arrow' }

const Template = (args: ArrowProps) => <Arrow {...args} />

export const Up = Template.bind({})
Up.args = {
    direction: 'up',
}

export const Down = Template.bind({})
Down.args = {
    direction: 'down',
}

export const Equal = Template.bind({})
Equal.args = {
    direction: 'equal',
}
