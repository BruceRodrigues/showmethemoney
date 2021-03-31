import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Container } from './Container'

describe('Container component', () => {
    it('should render div with container and mx-auto classes', () => {
        const { container } = render(<Container>content</Container>)

        const element = container.getElementsByClassName('container')
        expect(element[0]).toHaveClass('container mx-auto')
    })
})
