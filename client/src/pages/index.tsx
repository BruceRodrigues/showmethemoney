import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Button } from '../atoms'
import { StockItemProps, StockList } from '../molecules'

export default function Home({ stocks }: { stocks: StockItemProps[] }) {
    const router = useRouter()

    const handleClick = (item: StockItemProps) =>
        router.push(`/stock/${item.id}`)

    return (
        <>
            <Button
                label="Add"
                fullWidth
                onClick={() => router.push('/stock')}
            />
            <StockList items={stocks} onClick={handleClick} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(`http://server:3333/api/stocks`)
    const stocks = await response.json()

    return {
        props: {
            stocks: stocks.map((item: any) => ({ ...item, currentValue: 10 })),
        },
    }
}
