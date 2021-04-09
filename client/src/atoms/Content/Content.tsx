import React from 'react'
import { css } from '../../utils'

export interface ContentProps {
    backgroundColor?: string
    children: React.ReactNode
}

const styles = ['rounded-md', 'p-5', 'shadow-2xl']

export const Content = ({
    children,
    backgroundColor = 'bg-white',
}: ContentProps) => (
    <div className={css([...styles, backgroundColor])}>{children}</div>
)
