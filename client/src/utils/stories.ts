import { FC } from 'react'

export interface Story<T> extends FC<T> {
    args?: T
}
