import React from 'react'
import { css } from '../../utils'

export type JustifyPosition = 'start' | 'end' | 'center'

export interface CellProps extends React.HTMLProps<HTMLDivElement> {
    sm?: number
    md?: number
    lg?: number
    justify?: JustifyPosition
}

const styles = (
    sm?: number,
    md?: number,
    lg?: number,
    justify?: JustifyPosition
) => [
    `sm:col-span-${sm}`,
    `md:col-span-${md}`,
    `lg:col-span-${lg}`,
    `justify-self-${justify}`,
]

export const Cell = ({
    children,
    sm = 1,
    md,
    lg,
    justify = 'start',
    ...rest
}: CellProps) => {
    const mobile = sm || md || lg
    const tablet = md || sm || lg
    const desktop = lg || sm || md
    return (
        <div
            className={css(styles(mobile, tablet, desktop, justify))}
            {...rest}
        >
            {children}
        </div>
    )
}
