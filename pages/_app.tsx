import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import BasicLayout from '../src/components/layout';
import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
  </ThemeProvider>
);
export default App;
