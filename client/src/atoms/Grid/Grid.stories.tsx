import React from 'react'
import { Story } from '../../utils'
import { Cell } from './Cell'
import { Grid, GridProps } from './Grid'

export default { title: 'Atoms/Grid' }

const Content = ({
    children,
    sm,
    md,
    lg,
}: {
    children: React.ReactNode
    sm?: number
    md?: number
    lg?: number
}) => (
    <Cell
        style={{
            backgroundColor: 'lightgray',
            border: '1px solid black',
            textAlign: 'center',
        }}
        sm={sm}
        md={md}
        lg={lg}
    >
        {children}
    </Cell>
)

const Template: Story<GridProps> = (args: GridProps) => (
    <Grid {...args}>
        <Content>sm=1 md=1 lg=1</Content>
        <Content>sm=1 md=1 lg=1</Content>
        <Content sm={2} md={4} lg={6}>
            sm=2 md=4 lg=6
        </Content>
        <Content>sm=1 md=1 lg=1</Content>
        <Content>sm=1 md=1 lg=1</Content>
        <Content>sm=1 md=1 lg=1</Content>
        <Content>sm=1 md=1 lg=1</Content>
        <Content>sm=1 md=1 lg=1</Content>
    </Grid>
)

export const Basic = Template.bind({})
Basic.args = {
    sm: 2,
    md: 4,
    lg: 6,
    gap: 1,
}
