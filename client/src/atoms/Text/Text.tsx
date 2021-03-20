import React from 'react'
import { css } from '../../utils'

interface TextProps extends React.HTMLProps<HTMLElement> {
    variant: 'p' | 'span'
}

const styles = ['text-base', 'font-sans']

export const Text = ({ variant = 'span', children }: TextProps) => {
    const Element = variant as 'p' | 'span'
    return <Element className={css(styles)}>{children}</Element>
}
