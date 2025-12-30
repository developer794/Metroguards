import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Name - Nextjs Template"}
                </title>
                <link rel="icon" href="/assets/img/logo/client 14.webp" />
            </Head>
        </>
    )
}

export default PageHead