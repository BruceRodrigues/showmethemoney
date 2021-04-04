import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Header } from './Header'

describe('Header component', () => {
    it('should render Header component with svg image', () => {
        const { getByText } = render(<Header />)

        const svg = getByText('', { selector: 'svg' })
        expect(svg).toBeInTheDocument()
    })
})
