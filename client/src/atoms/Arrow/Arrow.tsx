import {
    ChevronDoubleDownIcon,
    ChevronDoubleUpIcon,
    MenuAlt4Icon,
} from '@heroicons/react/outline'
import React from 'react'
import { css } from '../../utils'

export type Direction = 'up' | 'down' | 'equal'

export interface ArrowProps {
    direction: Direction
}

const baseStyles = ['arrow']

const Arrows = {
    up: {
        component: ChevronDoubleUpIcon,
        styles: [...baseStyles, 'text-green-500'],
    },
    down: {
        component: ChevronDoubleDownIcon,
        styles: [...baseStyles, 'text-red-500'],
    },
    equal: {
        component: MenuAlt4Icon,
        styles: [...baseStyles, 'text-yellow-500'],
    },
}

export const Arrow = ({ direction }: ArrowProps) => {
    const arrow = Arrows[direction]
    return React.createElement(arrow.component, {
        className: css(arrow.styles),
    })
}
