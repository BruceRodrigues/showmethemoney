import React from 'react'
import { css } from '../../utils'

type Color = 'red' | 'green' | 'yellow' | 'blue'

interface CardProps {
    color: Color
    children: React.ReactNode
}

const base = [
    'bg-transparent',
    'rounded-md',
    'border-solid',
    'border-2',
    'p-4',
    'inline-flex',
]

const styles = {
    red: [...base, 'border-red-500'],
    blue: [...base, 'border-blue-500'],
    yellow: [...base, 'border-yellow-500'],
    green: [...base, 'border-green-500'],
}

export const Card = ({ color, children }: CardProps) => (
    <div className={css(styles[color])}>{children}</div>
)
