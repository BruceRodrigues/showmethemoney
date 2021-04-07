import React from 'react'
import { css } from '../../utils'
import { ALIGNMENTS, GRIDS } from './constants'
import { Columns } from './Grid'

export type JustifyPosition = 'start' | 'end' | 'center'

export interface CellProps extends React.HTMLProps<HTMLDivElement> {
    sm?: Columns
    md?: Columns
    lg?: Columns
    justify?: JustifyPosition
}

const styles = (
    sm: Columns,
    md: Columns,
    lg: Columns,
    justify: JustifyPosition
) => [
    `${GRIDS[sm].cellSM}`,
    `${GRIDS[md].cellMD}`,
    `${GRIDS[lg].cellLG}`,
    ALIGNMENTS[justify],
    'w-full',
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
