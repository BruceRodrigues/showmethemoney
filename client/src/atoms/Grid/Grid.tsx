import React from 'react'
import { css } from '../../utils/styles'

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
    sm?: number
    md?: number
    lg?: number
    gap?: number
}

const styles = (sm?: number, md?: number, lg?: number, gap?: number) => [
    'grid',
    `sm:grid-cols-${sm}`,
    `md:grid-cols-${md}`,
    `lg:grid-cols-${lg}`,
    `gap-${gap}`,
]

export const Grid = ({ children, sm = 12, md, lg, gap = 0 }: GridProps) => {
    const mobile = sm || md || lg
    const tablet = md || sm || lg
    const desktop = lg || sm || md
    return (
        <div className={css(styles(mobile, tablet, desktop, gap))}>
            {children}
        </div>
    )
}
