import * as yup from 'yup'

export const validator = yup.object({
    symbol: yup.string().max(6).required(),
    name: yup.string().required(),
    amount: yup.number().min(1).required(),
    price: yup.number().min(0.1).required(),
})
