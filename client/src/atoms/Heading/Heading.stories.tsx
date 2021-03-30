import React from 'react'
import { Story } from '../../utils'
import { Heading, HeadingProps } from './Heading'

export default { title: 'Atoms/Heading' }

const Template: Story<HeadingProps> = (args: HeadingProps) => (
    <Heading {...args}>The quick brown fox jumped over the lazy dog.</Heading>
)

export const basic = Template.bind({})
basic.args = {
    level: 1,
}
