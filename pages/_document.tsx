import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="r7ZDK-XF9PZ0QUzLrGPJE3WVGbdxywDDPaxCzdDCxiA" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/img/apple-touch-icon.png"></link>
          <meta name="theme-color" content="#0EB9AF" />
          <link rel="icon" href="/img/favicon.ico" />
          <link
            rel="stylesheet"
            crossOrigin="anonymous"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;