import { Global } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { fadeIn } from '../common/animations';
import { globalStyles } from '../common/styles';
import {
  Footer,
  Header,
  mdxComponents,
  mdxWrapper,
  ThemeProvider,
} from '../components';
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
    // reverse array
    .reverse()
    // add a sepeartor
    .join(' | ');

  return (
    <ThemeProvider theme={dark}>
      <Global styles={globalStyles} />
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

      <Header />

      <AnimatePresence exitBeforeEnter>
        {pathname.startsWith('/blog/') ? (
          <MDXProvider components={mdxComponents} key="mdx">
            <motion.main
              css={mdxWrapper}
              variants={fadeIn}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Component {...pageProps} />
            </motion.main>
          </MDXProvider>
        ) : (
          <motion.main
            key="main"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Component {...pageProps} />
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
