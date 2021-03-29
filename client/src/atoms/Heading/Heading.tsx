import React from 'react'
import { css } from '../../utils'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps extends React.HTMLProps<HTMLElement> {
    level: HeadingLevel
}

const baseStyles = ['font-sans']

const headinStyles = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
}

export const Heading = ({ level, children }: HeadingProps) => {
    const H = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    return (
        <H className={css([...baseStyles, headinStyles[level]])}>{children}</H>
    )
}
