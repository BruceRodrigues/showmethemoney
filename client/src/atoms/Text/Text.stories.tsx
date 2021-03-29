import React from 'react'
import { Text, TextProps } from './Text'

export default { title: 'Atoms/Text' }

const Template = (args: TextProps) => (
    <Text {...args}>The quick brown fox jumps over the lazy dog.</Text>
)

export const basic = Template.bind({})
basic.args = {
    variant: 'p',
    size: 'md',
}
