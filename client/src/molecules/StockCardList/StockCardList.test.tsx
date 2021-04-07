import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { StockCardList } from './StockCardList'

const item = {
    name: 'Oi LTDA',
    symbol: 'OIBR3',
    amount: 123,
    currentValue: 0.97,
    initialValue: 0.95,
}

describe('StockCardList component', () => {
    it('should present 5 StockCards', () => {
        const fn = jest.fn()

        const { getAllByText } = render(
            <StockCardList
                items={Array.of(item, item, item, item, item)}
                onClick={fn}
            />
        )
        const stockCards = getAllByText('Oi LTDA')
        expect(stockCards.length).toBe(5)
    })

    it('should have Add stock button', () => {
        const fn = jest.fn()

        const { getByText } = render(
            <StockCardList
                items={Array.of(item, item, item, item, item)}
                onClick={fn}
            />
        )
        const addStock = getByText('Add stock...')
        expect(addStock).toBeInTheDocument()
    })

    it('should call onClick', () => {
        const fn = jest.fn()

        const { getByText } = render(
            <StockCardList
                items={Array.of(item, item, item, item, item)}
                onClick={fn}
            />
        )
        const addStock = getByText('Add stock...')
        userEvent.click(addStock)
        expect(fn).toHaveBeenCalled()
    })
})
