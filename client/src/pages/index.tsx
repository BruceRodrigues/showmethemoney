import { GetServerSideProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Container, Content, Header } from '../atoms'
import { StockCardList, StockCardProps } from '../molecules'
export default function Home({ stocks }: { stocks: StockCardProps[] }) {
    const router = useRouter()
    return (
        <Container>
            <Header />
            <Content>
                <StockCardList
                    items={stocks}
                    onClick={() => router.push('/add')}
                />
            </Content>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(`http://localhost:3333/api/stocks`)
    const stocks = await response.json()
    return {
        props: {
            stocks,
        },
    }
}
