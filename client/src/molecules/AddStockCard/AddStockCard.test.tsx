import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { AddStockCard } from './AddStockCard'

describe('AddStockCard component', () => {
    it('should have color blue', () => {
        const fn = jest.fn()

        const { container } = render(<AddStockCard onClick={fn} />)
        const card = container.getElementsByClassName('card')
        expect(card.length).toBe(1)
        expect(card[0]).toHaveClass('border-blue-500')
    })

    it('should call onClick function', () => {
        const fn = jest.fn()

        const { container } = render(<AddStockCard onClick={fn} />)
        const card = container.getElementsByClassName('card')
        expect(card.length).toBe(1)

        userEvent.click(card[0])
        expect(fn).toHaveBeenCalled()
    })
})
