import React from 'react'
import { css } from '../../utils'

export interface PillProps {
    value: number
}

//prettier-ignore
const styles = [
    'pill',

    //Border
    'rounded-xl',
    'py-3',
    'px-6',

    //Text
    'text-white',
    'text-center'
]

const POSITIVE_BG = 'bg-green-500'

const NEGATIVE_BG = 'bg-red-500'

const EQUAL_BG = 'bg-yellow-500'

export const Pill = ({ value }: PillProps) => {
    const bg = value === 0 ? EQUAL_BG : value > 0 ? POSITIVE_BG : NEGATIVE_BG
    return <span className={css([...styles, bg])}>{`$ ${value}`}</span>
}
