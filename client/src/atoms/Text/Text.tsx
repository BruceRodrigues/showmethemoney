import React from 'react'
import { css } from '../../utils'

type FontSize = 'xs' | 'sm' | 'md' | 'lg'

interface TextProps extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
    variant: 'p' | 'span'
    size: FontSize
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
    children,
}: TextProps) => {
    const Element = variant as 'p' | 'span'
    return (
        <Element className={css([...styles, fontSizeStyles[size]])}>
            {children}
        </Element>
    )
}
