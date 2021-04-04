import React from 'react'
import { css } from '../../utils'

export interface ContentProps {
    backgroundColor?: string
    children: React.ReactNode
}

const styles = ['rounded-md', 'border-solid', 'border-2', 'p-5']

export const Content = ({
    children,
    backgroundColor = 'bg-white',
}: ContentProps) => (
    <div className={css([...styles, backgroundColor])}>{children}</div>
)
