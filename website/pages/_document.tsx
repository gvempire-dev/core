import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class GvDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
