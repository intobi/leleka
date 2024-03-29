import {Html, Head, Main, NextScript} from 'next/document'

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"/>
                <meta property="og:image" content='/facebook.png' key='image'/>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export default Document