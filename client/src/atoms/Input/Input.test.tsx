import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Input } from './Input'

describe('Input Component', () => {
    it('shold have the right styles', () => {
        const { container } = render(<Input label="label" name="name" />)
        const inputComponent = container.getElementsByTagName('input')
        expect(inputComponent.length).toBe(1)
        expect(inputComponent[0]).toHaveClass('ring-2 ring-indigo-300 rounded')

        const labelComponent = container.getElementsByTagName('label')
        expect(labelComponent.length).toBe(1)
        expect(labelComponent[0]).toHaveClass('text-gray-400 text-xs mb-1')
    })

    it('should present error message', () => {
        const { getByText } = render(
            <Input label="label" name="name" error="error message" />
        )

        const inputElement = getByText('error message')
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveClass('text-red-500')
    })
})
