import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Global } from '@emotion/core';
import { motion } from 'framer-motion';
import { MDXProvider } from '@mdx-js/react';

import {
  ThemeProvider,
  mdxComponents,
  mdxWrapper,
  Header,
  Footer,
} from '../components';
import { globalStyles } from '../common/styles';
import { fadeIn } from '../common/animations';
import { dark } from '../themes';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  const pageTitle = pathname
    .split('/')
    // remove the empty strings from slashes
    .filter((path) => Boolean(path))
    // capitalize the first letter
    .map((path) => path.charAt(0).toUpperCase() + path.slice(1))
    // replace `-` with spaces
    .map((path) => path.replace(/-/g, ' '))
    // add a sepeartor
    .join(' | ');

  return (
    <ThemeProvider theme={dark}>
      <Head>
        <title>
          {pageTitle
            ? `${pageTitle} @ GVEMPIRE`
            : `GVEMPIRE | Software Developers for Hire`}
        </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Global styles={globalStyles} />
      <Header />
      {pathname.startsWith('/blog/') ? (
        <MDXProvider components={mdxComponents}>
          <motion.main
            css={mdxWrapper}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <Component {...pageProps} />
          </motion.main>
        </MDXProvider>
      ) : (
        <main>
          <Component {...pageProps} />
        </main>
      )}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
