import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Arrow } from './Arrow'

describe('Arrow component', () => {
    it('Should render a red arrow down', () => {
        const { getByText } = render(<Arrow direction={'down'} />)

        expect(getByText('', { selector: 'svg' })).toHaveClass('text-red-500')
    })

    it('Should render with negative styles if value is less than 0', () => {
        const { getByText } = render(<Arrow direction={'up'} />)

        expect(getByText('', { selector: 'svg' })).toHaveClass('text-green-500')
    })

    it('Should render with negative styles if value is 0', () => {
        const { getByText } = render(<Arrow direction={'equal'} />)

        expect(getByText('', { selector: 'svg' })).toHaveClass(
            'text-yellow-500'
        )
    })
})
