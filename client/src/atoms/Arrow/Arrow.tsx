import {
    ChevronDoubleDownOutline,
    ChevronDoubleUpOutline,
    MenuAlt4Outline,
} from 'heroicons-react'
import React from 'react'
import { css } from '../../utils'

type Direction = 'up' | 'down' | 'equal'

interface ArrowProps {
    direction: Direction
}
const Arrows = {
    up: { component: ChevronDoubleUpOutline, styles: ['text-green-500'] },
    down: { component: ChevronDoubleDownOutline, styles: ['text-red-500'] },
    equal: { component: MenuAlt4Outline, styles: ['text-yellow-500'] },
}

export const Arrow = ({ direction }: ArrowProps) => {
    const arrow = Arrows[direction]
    return React.createElement(arrow.component, {
        className: css(arrow.styles),
    })
}
