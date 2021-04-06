import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Button } from './'

describe('Button component', () => {
    it('should call onClick', () => {
        const fn = jest.fn()

        const { container } = render(<Button label="button" onClick={fn} />)
        const button = container.getElementsByTagName('button')
        expect(button.length).toBe(1)

        userEvent.click(button[0])
        expect(fn).toHaveBeenCalled()
    })
})
