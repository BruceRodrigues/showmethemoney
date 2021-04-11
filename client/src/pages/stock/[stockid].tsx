import { GetServerSideProps } from 'next'
import React from 'react'
import { Content } from '../../atoms'
import { api } from '../../config'
import { StockForm, StockFormData } from '../../molecules'

export default function StockPage({ stock }: { stock: StockFormData }) {
    const handleSumit = (data: StockFormData) => {
        console.log(` ${data}`)
        // api.put(`http://localhost:3333/api/stocks/${stockid}`, data).then(() =>
        //     router.push('/')
        // )
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
