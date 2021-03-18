import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Card } from './Card'

describe('Card component', () => {
    it('Should render with a red border', () => {
        const { getByText } = render(<Card color={'red'}>Content</Card>)

        expect(getByText('Content', { selector: 'div' })).toHaveClass(
            'border-red-500'
        )
    })

    it('Should render with a blue border', () => {
        const { getByText } = render(<Card color={'blue'}>Content</Card>)

        expect(getByText('Content', { selector: 'div' })).toHaveClass(
            'border-blue-500'
        )
    })

    it('Should render with a yellow border', () => {
        const { getByText } = render(<Card color={'yellow'}>Content</Card>)

        expect(getByText('Content', { selector: 'div' })).toHaveClass(
            'border-yellow-500'
        )
    })

    it('Should render with a green border', () => {
        const { getByText } = render(<Card color={'green'}>Content</Card>)

        expect(getByText('Content', { selector: 'div' })).toHaveClass(
            'border-green-500'
        )
    })
})
