import React from 'react'
import { css } from '../../utils'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    label?: string
    name: string
    uppercase?: boolean
    error?: string
}

const styles = ['flex', 'flex-col', 'w-full']

const labelStyles = ['text-gray-400', 'text-xs', 'mb-1']

const errorStyles = ['text-red-500', 'text-xs', 'mt-1']

const inputStyles = (uppercase?: boolean, error?: string) => {
    const uppercaseStyles = uppercase ? ['uppercase'] : []
    const errorStyles = error ? ['ring-red-300'] : []

    return [
        'ring-2',
        'ring-indigo-300',
        'rounded',
        'py-2',
        'px-3',
        'text-sm',
        'text-gray-500',
        ...uppercaseStyles,
        ...errorStyles,
    ]
}

export const Input = ({
    label,
    name,
    uppercase,
    error,
    ...rest
}: InputProps) => {
    return (
        <div className={css(styles)}>
            <label className={css(labelStyles)} htmlFor={name}>
                {label}
            </label>
            <input
                className={css(inputStyles(uppercase, error))}
                name={name}
                {...rest}
            />
            {error && <span className={css(errorStyles)}>{error}</span>}
        </div>
    )
}
