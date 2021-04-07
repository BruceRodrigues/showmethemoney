import React from 'react'
import { css } from '../../utils/styles'
import { GRIDS } from './constants'

export type Columns = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface GridProps extends React.HTMLProps<HTMLDivElement> {
    sm?: Columns
    md?: Columns
    lg?: Columns
    gap?: number
    verticalGap?: Columns
    horizontalGap?: Columns
    autoFit?: boolean
}

const styles = (verticalGap?: number, horizontalGap?: number) => [
    'grid',
    'w-full',
    `gap-x-${horizontalGap}`,
    `gap-y-${verticalGap}`,
]

const stylesGridColumns = (sm: Columns, md: Columns, lg: Columns) => [
    `${GRIDS[sm].gridSM}`,
    `${GRIDS[md].gridMD}`,
    `${GRIDS[lg].gridLG}`,
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
    const mobile = sm || md || (lg as Columns)
    const tablet = md || sm || (lg as Columns)
    const desktop = lg || sm || (md as Columns)
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
