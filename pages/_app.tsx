import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/core';

import { AppProps } from 'next/app';
import BasicLayout from '../src/components/layout';
import Head from 'next/head'
import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TAG}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GA_TAG}', {
        page_path: window.location.pathname,
      });
    `,
      }}
    />
    </Head>
    <CSSReset />
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
  </ThemeProvider>
);
export default App;
