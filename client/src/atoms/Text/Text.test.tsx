import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Text } from './Text'

describe('Text component', () => {
    it('Should render Text as a paragraph element', () => {
        const { getByText } = render(<Text variant="p">Content</Text>)

        expect(getByText('Content', { selector: 'p' })).toBeInTheDocument()
    })

    it('Should render Text as a span element', () => {
        const { getByText } = render(<Text variant="span">Content</Text>)

        expect(getByText('Content', { selector: 'span' })).toBeInTheDocument()
    })

    it('Should render Text with font extra small', () => {
        const { getByText } = render(
            <Text variant="span" size="xs">
                Content
            </Text>
        )

        expect(getByText('Content', { selector: 'span' })).toHaveClass(
            'text-xs'
        )
    })

    it('Should render Text with font small', () => {
        const { getByText } = render(
            <Text variant="span" size="sm">
                Content
            </Text>
        )

        expect(getByText('Content', { selector: 'span' })).toHaveClass(
            'text-sm'
        )
    })

    it('Should render Text with font medium', () => {
        const { getByText } = render(
            <Text variant="span" size="md">
                Content
            </Text>
        )

        expect(getByText('Content', { selector: 'span' })).toHaveClass(
            'text-base'
        )
    })

    it('Should render Text with font large', () => {
        const { getByText } = render(
            <Text variant="span" size="lg">
                Content
            </Text>
        )

        expect(getByText('Content', { selector: 'span' })).toHaveClass(
            'text-lg'
        )
    })
})
