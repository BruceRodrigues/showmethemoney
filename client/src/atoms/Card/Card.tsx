import React from 'react'
import { css } from '../../utils'

export type Color = 'red' | 'green' | 'yellow' | 'blue'

export interface CardProps {
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
]

const styles = {
    red: [...base, 'border-red-500', 'ring-red-500'],
    blue: [...base, 'border-blue-500', 'ring-blue-500'],
    yellow: [...base, 'border-yellow-500', 'ring-yellow-500'],
    green: [...base, 'border-green-500', 'ring-green-500'],
}

export const Card = ({ color = 'blue', children }: CardProps) => (
    <div className={css(styles[color])}>{children}</div>
)
