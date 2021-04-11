import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Content } from '../../atoms'
import { api } from '../../config'
import { StockForm, StockFormData } from '../../molecules'
export default function AddPage() {
    const router = useRouter()

    const handleSumit = (data: StockFormData) => {
        api.post('http://localhost:3333/api/stocks', data).then(() =>
            router.push('/')
        )
    }

    return (
        <>
            <Content>
                <StockForm onSubmit={handleSumit} />
            </Content>
        </>
    )
}
