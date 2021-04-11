import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Content } from '../../atoms'
import { api } from '../../config'
import { StockForm, StockFormData } from '../../molecules'

export default function StockPage({ stock }: { stock: StockFormData }) {
    const router = useRouter()
    const handleSumit = (data: any) => {
        //TODO this should be removed when serializations are handled with a proper way
        delete data['initialValue']
        api.put(`http://localhost:3333/api/stocks/${data.id}`, data).then(() =>
            router.push('/')
        )
    }

    return (
        <>
            <Content>
                <StockForm onSubmit={handleSumit} defaultValues={stock} />
            </Content>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { stockid } = query
    const response = await api.get(`http://server:3333/api/stocks/${stockid}`)

    return {
        props: {
            stock: { ...response.data, price: response.data.initialValue },
        },
    }
}
