import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Container } from '@material-ui/core'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Drivers App(default title)' }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container>
                <header>
                    <nav>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <span>I am a stylish footer</span>
                </footer>
            </Container>
        </div>
    )
}

export default Layout