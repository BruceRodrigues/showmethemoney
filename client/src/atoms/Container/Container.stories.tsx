import React from 'react'
import { Story } from '../../utils'
import { Container, ContainerProps } from './Container'

export default { title: 'Atoms/Container' }

const Template: Story<ContainerProps> = (args: ContainerProps) => (
    <Container {...args} />
)

export const basic = Template.bind({})
basic.args = {
    children: (
        <div style={{ backgroundColor: 'grey', width: '100%', height: '100%' }}>
            content...
        </div>
    ),
}
