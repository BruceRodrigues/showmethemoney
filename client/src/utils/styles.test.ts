import { css } from '.'

describe('styles', () => {
    it('Should join classes without condition', () => {
        const styles = ['test1', 'test2', 'test3']
        const result = css(styles)
        expect(result).toBe('test1 test2 test3')
    })

    it('Should join classes with true condition', () => {
        const styles = ['test1', 'test2', 'test3']
        const result = css(styles, { if: true, true: 'true', false: 'false' })
        expect(result).toBe('test1 test2 test3 true')
    })

    it('Should join classes with false condition', () => {
        const styles = ['test1', 'test2', 'test3']
        const result = css(styles, { if: false, true: 'true', false: 'false' })
        expect(result).toBe('test1 test2 test3 false')
    })
})
