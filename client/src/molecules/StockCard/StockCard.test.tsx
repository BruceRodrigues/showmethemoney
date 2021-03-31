import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { StockCard } from './StockCard'

describe('StockCard component', () => {
    it('should present StockCard for profit stock', () => {
        const { container } = render(
            <StockCard
                amount={10}
                currentValue={1}
                initialValue={0.5}
                name="name"
                symbol="NM"
            />
        )

        const card = container.getElementsByClassName('card')
        const pill = container.getElementsByClassName('pill')
        expect(card.length).toBe(1)
        expect(pill.length).toBe(1)
        expect(card[0]).toHaveClass('border-green-500')
        expect(pill[0]).toHaveClass('bg-green-500')
    })

    it('should present StockCard for loss stock', () => {
        const { container } = render(
            <StockCard
                amount={10}
                currentValue={1}
                initialValue={1.5}
                name="name"
                symbol="NM"
            />
        )

        const card = container.getElementsByClassName('card')
        const pill = container.getElementsByClassName('pill')
        expect(card.length).toBe(1)
        expect(pill.length).toBe(1)
        expect(card[0]).toHaveClass('border-red-500')
        expect(pill[0]).toHaveClass('bg-red-500')
    })

    it('should calc the right total value', () => {
        const { getByText } = render(
            <StockCard
                amount={10}
                currentValue={1}
                initialValue={1.5}
                name="name"
                symbol="NM"
            />
        )

        const expectedTotal = +(1 * 10 - 1.5 * 10).toFixed(2)

        expect(getByText(expectedTotal)).toBeInTheDocument()
    })
})
