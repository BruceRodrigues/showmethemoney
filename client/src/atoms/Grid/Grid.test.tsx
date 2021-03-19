import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { Cell } from './Cell'
import { Grid } from './Grid'

describe('Grid component', () => {
    it('Should render a grid with default 12 column template', () => {
        const { container } = render(
            <Grid>
                <Cell>content</Cell>
            </Grid>
        )
        const grid = container.getElementsByClassName('grid')
        expect(grid.length).toBe(1)
        expect(grid[0]).toHaveClass(
            'sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12'
        )
    })

    it('Should render a grid with gap 0 as default', () => {
        const { container } = render(
            <Grid>
                <Cell>content</Cell>
            </Grid>
        )
        const grid = container.getElementsByClassName('grid')
        expect(grid.length).toBe(1)
        expect(grid[0]).toHaveClass('gap-0')
    })

    it('Should render a grid with the same amount of columns for every breakpoint when only sm is passed', () => {
        const { container } = render(
            <Grid sm={4}>
                <Cell>content</Cell>
            </Grid>
        )
        const grid = container.getElementsByClassName('grid')
        expect(grid.length).toBe(1)
        expect(grid[0]).toHaveClass(
            'sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4'
        )
    })

    it('Should render a grid with the same amount of columns for sm and lg when only sm and md are passed', () => {
        const { container } = render(
            <Grid sm={4} md={5}>
                <Cell>content</Cell>
            </Grid>
        )
        const grid = container.getElementsByClassName('grid')
        expect(grid.length).toBe(1)
        expect(grid[0]).toHaveClass(
            'sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4'
        )
    })

    it('Should render a grid with the given amount of columns for every breakpoint', () => {
        const { container } = render(
            <Grid sm={4} md={5} lg={6}>
                <Cell>content</Cell>
            </Grid>
        )
        const grid = container.getElementsByClassName('grid')
        expect(grid.length).toBe(1)
        expect(grid[0]).toHaveClass(
            'sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'
        )
    })
})
