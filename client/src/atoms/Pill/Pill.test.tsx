import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Pill } from './Pill'

describe('Pill component', () => {
    it('Should render with positive styles is greater than 0', () => {
        const { getByText } = render(<Pill value={9} />)

        expect(getByText('9', { selector: 'span' })).toHaveClass('bg-green-500')
    })

    it('Should render with negative styles if value is less than 0', () => {
        const { getByText } = render(<Pill value={-1} />)

        expect(getByText('-1', { selector: 'span' })).toHaveClass('bg-red-500')
    })

    it('Should render with negative styles if value is 0', () => {
        const { getByText } = render(<Pill value={0} />)

        expect(getByText('0', { selector: 'span' })).toHaveClass('bg-red-500')
    })
})
