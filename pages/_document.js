import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='icon'
            href='/favicon.ico'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css'
          />
          <link
            rel='preconnect'
            href='https://fonts.googleapis.com'
          />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossorigin
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
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
