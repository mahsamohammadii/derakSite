import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createTheme());

class MyDocument extends Document {
  render() {
    return (
      <Html  >
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          {/* <link rel="shortcut icon" href="favicon"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;