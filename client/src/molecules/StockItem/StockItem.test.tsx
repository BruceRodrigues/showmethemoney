import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { StockItemProps } from '..'
import { StockItem } from './StockItem'

const props: StockItemProps = {
    name: 'Oi LTDA',
    symbol: 'OIBR3',
    amount: 123,
    currentValue: 0.97,
    initialValue: 0.95,
}

describe('StockItem component', () => {
    it('should render all required on the right column', () => {
        const { container } = render(<StockItem {...props} />)
        const items = container.getElementsByClassName('column')
        const symbol = items[0].getElementsByTagName('span')
        const name = items[1].getElementsByTagName('span')
        const amount = items[2].getElementsByTagName('span')
        const initialValue = items[3].getElementsByTagName('span')

        expect(symbol[0].innerHTML).toBe('Symbol')
        expect(symbol[1].innerHTML).toBe('OIBR3')

        expect(name[0].innerHTML).toBe('Name')
        expect(name[1].innerHTML).toBe('Oi LTDA')

        expect(amount[0].innerHTML).toBe('Amount')
        expect(amount[1].innerHTML).toBe('123')

        expect(initialValue[0].innerHTML).toBe('Initial value')
        expect(initialValue[1].innerHTML).toBe('0.95')
    })

    it('should render the total value based on current value and amount', () => {
        const { getByText } = render(<StockItem {...props} />)

        const total = getByText((123 * 0.97 - 123 * 0.95).toFixed(2), {
            exact: false,
        })

        expect(total).toBeInTheDocument()
    })

    it('should render values in red when total is less than 0', () => {
        const { container } = render(
            <StockItem {...props} currentValue={0.9} />
        )
        const items = container.getElementsByClassName('column')

        for (let i = 0; i < items.length; i++) {
            const values = items[i].getElementsByTagName('span')
            expect(values[0]).toHaveClass('uppercase text-gray-800')
            expect(values[1]).toHaveClass('overflow-ellipsis text-red-600')
        }
    })

    it('should render values in red when total is less than 0', () => {
        const { container } = render(
            <StockItem {...props} currentValue={1.9} />
        )
        const items = container.getElementsByClassName('column')

        for (let i = 0; i < items.length; i++) {
            const values = items[i].getElementsByTagName('span')
            expect(values[0]).toHaveClass('uppercase text-gray-800')
            expect(values[1]).toHaveClass('overflow-ellipsis text-green-600')
        }
    })
})
