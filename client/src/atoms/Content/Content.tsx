import React from 'react'
import { css } from '../../utils'

export interface ContentProps extends React.HTMLProps<HTMLDivElement> {
    backgroundColor?: string
    children: React.ReactNode
}

const styles = ['rounded-md', 'p-5', 'shadow-2xl']

export const Content = ({
    children,
    backgroundColor = 'bg-white',
    className,
    ...rest
}: ContentProps) => (
    <div className={css([...styles, backgroundColor]) + className} {...rest}>
        {children}
    </div>
)
