import React from 'react'
import { Container } from '..'
// @ts-expect-error This is a known issue on NextJs
// https://github.com/airbnb/babel-plugin-inline-react-svg/pull/17
import LogoSVG from './logo.svg'

export const Header = () => (
    <Container>
        <LogoSVG style={{ width: '215px', height: '200px', margin: 'auto' }} />
    </Container>
)
