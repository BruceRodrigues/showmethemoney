import React from 'react'
import { Heading } from './Heading'

export default { title: 'Atoms/Heading' }

const Template = ({ ...args }) => (
    <Heading {...args}>The quick brown fox jumped over the lazy dog.</Heading>
)

export const basic = Template.bind({})
basic.args = {
    level: 1,
}
