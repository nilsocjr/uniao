import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#1b4462" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript>
                        <script
                            type="text/javascript"
                            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6ruwZMg-TYGCSTLkgTFau-iIoWCrqZls"
                        ></script>
                    </NextScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument
