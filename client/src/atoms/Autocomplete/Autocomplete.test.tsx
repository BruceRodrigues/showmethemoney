import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Autocomplete } from './Autocomplete'

const props = {
    label: 'Who is your favorite hero?',
    itemToString: (item: string) => item ?? '',
    items: ['Batman', 'Iron man', 'Spider man', 'Super man', 'Black Widow'],
    name: 'hero',
}

describe('Autocomplete component', () => {
    it('should show items menu', () => {
        const { container } = render(<Autocomplete {...props} />)
        const inputComponent = container.getElementsByTagName('input')
        userEvent.type(inputComponent[0], 'Bat')

        const menu = container.getElementsByClassName('menu')
        expect(menu.length).toBe(1)
        expect(menu[0]).toBeInTheDocument()
    })

    it('should show items based on itemToString', () => {
        const { container, getByText } = render(
            <Autocomplete<{ name: string; id: number }>
                items={[{ name: 'Luke', id: 1 }]}
                name="hero"
                itemToString={(item) => item?.name || ''}
            />
        )
        const inputComponent = container.getElementsByTagName('input')
        userEvent.type(inputComponent[0], 'Lu')

        expect(getByText('Luke')).toBeInTheDocument()
    })

    it('should call onInputChange', () => {
        const onInputChange = jest.fn()

        const { container } = render(
            <Autocomplete {...props} onInputChange={onInputChange} />
        )
        const inputComponent = container.getElementsByTagName('input')
        userEvent.type(inputComponent[0], 'Bat')

        expect(onInputChange).toBeCalledTimes(3)
        expect(onInputChange).toBeCalledWith('B')
        expect(onInputChange).toBeCalledWith('Ba')
        expect(onInputChange).toBeCalledWith('Bat')
    })

    it('should call onValueChange', () => {
        const onValueChange = jest.fn()

        const { container, getByText } = render(
            <Autocomplete {...props} onValueChange={onValueChange} />
        )
        const inputComponent = container.getElementsByTagName('input')
        userEvent.type(inputComponent[0], 'Bat')

        userEvent.click(getByText('Batman'))

        expect(onValueChange).toBeCalled()
        expect(onValueChange).toBeCalledWith('Batman')
    })
})
