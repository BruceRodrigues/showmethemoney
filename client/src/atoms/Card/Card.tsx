import React from 'react'
import { css } from '../../utils'

export type Color = 'red' | 'green' | 'yellow' | 'blue'

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
    color?: Color
    children: React.ReactNode
}

const base = [
    'card',
    'bg-transparent',
    'ring',
    'ring-opacity-40',
    'rounded-md',
    'border-solid',
    'border-2',
    'shadow-inner',
    'p-4',
    'inline-flex',
    'w-64',
    'h-28',
    'cursor-pointer',
]

const styles = (color: Color) => [
    ...base,
    `border-${color}-500`,
    `ring-${color}-500`,
    `hover:bg-${color}-100`,
]

export const Card = ({ color = 'blue', children, ...rest }: CardProps) => (
    <div className={css(styles(color))} {...rest}>
        {children}
    </div>
)
