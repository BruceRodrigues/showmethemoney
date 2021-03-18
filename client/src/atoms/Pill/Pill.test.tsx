import React from 'react'
import { render } from '@testing-library/react'
import { Pill } from './Pill'

describe('Pill component', () => {
    it('Should render with positive styles is greater than 0', () => {
        const { getByRole } = render(<Pill value={9} />)

        expect(getByRole('span')).toHaveClass('bg-green-500')
    })

    it('Should render with negative styles if value is less than 0', () => {
        const { getByRole } = render(<Pill value={-1} />)

        expect(getByRole('span')).toHaveClass('bg-red-500')
    })

    it('Should render with negative styles if value is 0', () => {
        const { getByRole } = render(<Pill value={0} />)

        expect(getByRole('span')).toHaveClass('bg-red-500')
    })
})
