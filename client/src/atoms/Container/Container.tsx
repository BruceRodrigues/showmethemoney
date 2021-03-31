import React from 'react'
import { css } from '../../utils'

export type ContainerProps = React.HTMLProps<HTMLDivElement>

const styles = ['container']

export const Container = ({ children }: ContainerProps) => (
    <div className={css(styles)}>{children}</div>
)
