import React from 'react'
import { css } from '../../utils'

type FontSize = 'xs' | 'sm' | 'md' | 'lg'

export interface TextProps extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
    variant?: 'p' | 'span'
    size?: FontSize
    classes?: string[]
}

const styles = ['font-sans']

const fontSizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
}

export const Text = ({
    variant = 'span',
    size = 'md',
    classes = [],
    children,
}: TextProps) => {
    const Element = variant as 'p' | 'span'
    return (
        <Element className={css([...styles, ...classes, fontSizeStyles[size]])}>
            {children}
        </Element>
    )
}
