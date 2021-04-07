import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Container, Content, Header } from '../../atoms'
import { StockForm } from '../../molecules'
export default function AddPage() {
    const router = useRouter()
    return (
        <Container>
            <Header />
            <Content>
                <StockForm onSubmit={() => router.push('/')} />
            </Content>
        </Container>
    )
}
