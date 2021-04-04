import React from 'react'
import { css } from '../../utils/styles'

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
    sm?: number
    md?: number
    lg?: number
    gap?: number
    verticalGap?: number
    horizontalGap?: number
    autoFit?: boolean
}

const styles = (verticalGap?: number, horizontalGap?: number) => [
    'grid',
    'w-full',
    `gap-x-${horizontalGap}`,
    `gap-y-${verticalGap}`,
]

const stylesGridColumns = (sm?: number, md?: number, lg?: number) => [
    `sm:grid-cols-${sm}`,
    `md:grid-cols-${md}`,
    `lg:grid-cols-${lg}`,
]

const stylesGridAutoFit = () => [`grid-cols-auto-fit-250`]

export const Grid = ({
    children,
    sm = 12,
    md,
    lg,
    verticalGap = 0,
    horizontalGap = 0,
    autoFit = false,
}: GridProps) => {
    const mobile = sm || md || lg
    const tablet = md || sm || lg
    const desktop = lg || sm || md
    const columnStyles = autoFit
        ? stylesGridAutoFit()
        : stylesGridColumns(mobile, tablet, desktop)
    return (
        <div
            className={css([
                ...styles(verticalGap, horizontalGap),
                ...columnStyles,
            ])}
        >
            {children}
        </div>
    )
}
