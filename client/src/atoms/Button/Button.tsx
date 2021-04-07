import React from 'react'
import { css } from '../../utils'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    label: string
    type?: 'submit' | 'reset' | 'button'
    fullWidth?: boolean
}

const styles = [
    'rounded-lg',
    'bg-blue-500',
    'py-3',
    'px-5',
    'text-white',
    'hover:bg-blue-400',
]
export const Button = ({
    label,
    type = 'button',
    fullWidth = false,
    ...rest
}: ButtonProps) => {
    return (
        <button
            {...rest}
            type={type}
            className={css(styles, {
                if: fullWidth,
                true: 'w-full',
                false: '',
            })}
        >
            {label}
        </button>
    )
}
