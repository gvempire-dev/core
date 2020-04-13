import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="application-name" content="GVEMPIRE" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="GVEMPIRE" />
          <meta
            name="description"
            content="Maximize your business potential with the latest and most innovative technologies"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="icons/favicon-16x16.png"
          />
          <link rel="manifest" href="manifest.json" />
          <link
            rel="mask-icon"
            href="icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="icons/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://gvempire.dev" />
          <meta name="twitter:title" content="GVEMPIRE" />
          <meta
            name="twitter:description"
            content="Maximize your business potential with the latest and most innovative technologies"
          />
          <meta
            name="twitter:image"
            content="https://gvempire.dev/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@aghst" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="GVEMPIRE" />
          <meta
            property="og:description"
            content="Maximize your business potential with the latest and most innovative technologies"
          />
          <meta property="og:site_name" content="GVEMPIRE" />
          <meta property="og:url" content="https://gvempire.dev" />
          <meta
            property="og:image"
            content="https://gvempire.dev/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
