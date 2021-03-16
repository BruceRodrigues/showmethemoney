import React from 'react'
import { css } from '../../utils'

export interface PillProps {
    value: number
}

//prettier-ignore
const styles = [
    //Border
    'rounded-xl',
    'py-3',
    'px-6',

    //Text
    'text-white',
]

const POSITIVE_BG = 'bg-green-500'

const NEGATIVE_BG = 'bg-red-500'

export const Pill = ({ value }: PillProps) => (
    <span
        className={css(styles, {
            if: value > 0,
            true: POSITIVE_BG,
            false: NEGATIVE_BG,
        })}
    >
        {value}
    </span>
)
