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

const styleColors = {
    red: [`border-red-500`, `ring-red-500`, `hover:bg-red-100`],
    green: [`border-green-500`, `ring-green-500`, `hover:bg-green-100`],
    yellow: [`border-yellow-500`, `ring-yellow-500`, `hover:bg-yellow-100`],
    blue: [`border-blue-500`, `ring-blue-500`, `hover:bg-blue-100`],
}

const styles = (color: Color) => [...base, ...styleColors[color]]

export const Card = ({ color = 'blue', children, ...rest }: CardProps) => (
    <div className={css(styles(color))} {...rest}>
        {children}
    </div>
)
