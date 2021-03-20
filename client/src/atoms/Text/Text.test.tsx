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
})
