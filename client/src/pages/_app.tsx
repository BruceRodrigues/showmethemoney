import { AppProps } from 'next/app'
import React from 'react'
import { Container, Header } from '../atoms'
import './../styles/globals.css'
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    )
}
