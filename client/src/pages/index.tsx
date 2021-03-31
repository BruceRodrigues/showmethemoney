import { GetStaticProps } from 'next'
import React from 'react'
import { Container } from '../atoms'
import { StockCardList, StockCardProps } from '../molecules'
export default function Home({ stocks }: { stocks: StockCardProps[] }) {
    return (
        <Container>
            <h1>SHOW ME THE MONEY</h1>
            <StockCardList items={stocks} />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            stocks: [
                {
                    symbol: 'HYPE3F',
                    name: 'Hypera Pharma',
                    amount: 123,
                    initialValue: 30.0,
                    currentValue: 32.43,
                },
                {
                    symbol: 'COCE5F',
                    name: 'Companhia Energetica do Ceara',
                    amount: 56,
                    initialValue: 63.0,
                    currentValue: 53.85,
                },
                {
                    symbol: 'RANI3',
                    name: 'Celulose Irani',
                    amount: 783,
                    initialValue: 5.62,
                    currentValue: 5.62,
                },
                {
                    symbol: 'UCAS3',
                    name: 'Unicasa Móveis',
                    amount: 12,
                    initialValue: 3.29,
                    currentValue: 4.47,
                },
                {
                    symbol: 'ENJU3F',
                    name: 'Enjoei',
                    amount: 765,
                    initialValue: 31.0,
                    currentValue: 10.17,
                },
            ] as StockCardProps[],
        },
    }
}
