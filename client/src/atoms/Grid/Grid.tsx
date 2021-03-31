import React from 'react'
import { css } from '../../utils/styles'

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
    sm?: number
    md?: number
    lg?: number
    gap?: number
    verticalGap?: number
    horizontalGap?: number
}

const styles = (
    sm?: number,
    md?: number,
    lg?: number,
    verticalGap?: number,
    horizontalGap?: number
) => [
    'grid',
    'w-full',
    `sm:grid-cols-${sm}`,
    `md:grid-cols-${md}`,
    `lg:grid-cols-${lg}`,
    `gap-x-${horizontalGap}`,
    `gap-y-${verticalGap}`,
]

export const Grid = ({
    children,
    sm = 12,
    md,
    lg,
    verticalGap = 0,
    horizontalGap = 0,
}: GridProps) => {
    const mobile = sm || md || lg
    const tablet = md || sm || lg
    const desktop = lg || sm || md
    return (
        <div
            className={css(
                styles(mobile, tablet, desktop, verticalGap, horizontalGap)
            )}
        >
            {children}
        </div>
    )
}
