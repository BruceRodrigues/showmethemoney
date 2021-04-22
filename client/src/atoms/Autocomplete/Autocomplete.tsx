import { useCombobox } from 'downshift'
import React from 'react'
import { Input, InputProps } from '../'
import { css } from '../../utils'

export interface AutocompleteProps<T> extends InputProps {
    items: T[]
    itemToString(item?: T | null): string
    onInputChange?(value?: string): void
    onValueChange?(item?: T | null): void
}

const menuStyles = [
    'menu',
    'rounded',
    'text-sm',
    'text-gray-500',
    'mt-4',
    'py-2',
    'px-3',
    'shadow-md',
]

const itemStyles = ['cursor-pointer']

export function Autocomplete<T>({
    items,
    itemToString,
    onInputChange,
    onValueChange,
    ...rest
}: AutocompleteProps<T>) {
    const {
        getInputProps,
        getComboboxProps,
        getMenuProps,
        getItemProps,
        highlightedIndex,
        isOpen,
    } = useCombobox<T>({
        items,
        itemToString,
        onInputValueChange: ({ inputValue }) => onInputChange?.(inputValue),
        onSelectedItemChange: ({ selectedItem }) =>
            onValueChange?.(selectedItem),
    })
    return (
        <div {...getComboboxProps()}>
            <Input {...rest} {...getInputProps()} />
            <div {...getMenuProps()}>
                {isOpen && (
                    <ul className={css(menuStyles)}>
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className={css(itemStyles, {
                                    if: highlightedIndex === index,
                                    true: 'text-gray-700',
                                    false: '',
                                })}
                                {...getItemProps({ index, item })}
                            >
                                {itemToString(item)}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
