import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import BasicLayout from '../src/components/layout';
import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ColorModeProvider>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ColorModeProvider>
  </ThemeProvider>
);
export default App;
