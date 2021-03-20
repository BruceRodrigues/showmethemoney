import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Heading } from './Heading'

describe('Heading component', () => {
    it('Should render heading as h1', () => {
        const { getByText } = render(<Heading level={1}>Content</Heading>)

        expect(getByText('Content', { selector: 'h1' })).toHaveClass('text-4xl')
    })

    it('Should render heading as h2', () => {
        const { getByText } = render(<Heading level={2}>Content</Heading>)

        expect(getByText('Content', { selector: 'h2' })).toHaveClass('text-3xl')
    })

    it('Should render heading as h3', () => {
        const { getByText } = render(<Heading level={3}>Content</Heading>)

        expect(getByText('Content', { selector: 'h3' })).toHaveClass('text-2xl')
    })

    it('Should render heading as h4', () => {
        const { getByText } = render(<Heading level={4}>Content</Heading>)

        expect(getByText('Content', { selector: 'h4' })).toHaveClass('text-xl')
    })

    it('Should render heading as h5', () => {
        const { getByText } = render(<Heading level={5}>Content</Heading>)

        expect(getByText('Content', { selector: 'h5' })).toHaveClass('text-lg')
    })

    it('Should render heading as h6', () => {
        const { getByText } = render(<Heading level={6}>Content</Heading>)

        expect(getByText('Content', { selector: 'h6' })).toHaveClass(
            'text-base'
        )
    })
})
