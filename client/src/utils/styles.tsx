export const css = (
    value: string[],
    condition?: {
        if: boolean
        true: string
        false: string
    }
): string => {
    let style = ''
    if (condition) {
        style = condition.if ? condition.true : condition.false
    }
    return `${value.join(' ')} ${style}`.trimEnd()
}
