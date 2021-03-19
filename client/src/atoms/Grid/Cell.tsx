import React from 'react'
import { css } from '../../utils'

interface CellProps extends React.HTMLProps<HTMLDivElement> {
    sm?: number
    md?: number
    lg?: number
}

const styles = (sm?: number, md?: number, lg?: number) => [
    `sm:col-span-${sm}`,
    `md:col-span-${md}`,
    `lg:col-span-${lg}`,
]

export const Cell = ({ children, sm = 1, md, lg, ...rest }: CellProps) => {
    const mobile = sm || md || lg
    const tablet = md || sm || lg
    const desktop = lg || sm || md
    return (
        <div className={css(styles(mobile, tablet, desktop))} {...rest}>
            {children}
        </div>
    )
}
