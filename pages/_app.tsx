import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import BasicLayout from '../src/components/layout';
import theme from '../theme';
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8862002577533883"
     crossOrigin="anonymous"></script>
    </Head>
    <CSSReset />
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
  </ThemeProvider>
);
export default App;
