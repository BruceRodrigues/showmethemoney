import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
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
        const { getAllByText } = render(
            <StockCardList items={Array.of(item, item, item, item, item)} />
        )
        const stockCards = getAllByText('Oi LTDA')
        expect(stockCards.length).toBe(5)
    })
})
