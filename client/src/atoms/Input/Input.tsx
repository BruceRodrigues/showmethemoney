import React from 'react'
import { css } from '../../utils'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    label?: string
    name: string
}

const styles = ['flex', 'flex-col', 'w-full']

const labelStyles = ['text-gray-400', 'text-xs', 'mb-1']

const inputStyles = [
    'ring-2',
    'ring-indigo-300',
    'rounded',
    'py-2',
    'px-3',
    'text-sm',
    'text-gray-500',
]

export const Input = ({ label, name, ...rest }: InputProps) => {
    return (
        <div className={css(styles)}>
            <label className={css(labelStyles)} htmlFor={name}>
                {label}
            </label>
            <input className={css(inputStyles)} name={name} {...rest} />
        </div>
    )
}
