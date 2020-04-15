import { AppProps } from "next/app";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import BasicLayout from "../src/components/layout";
import theme from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
export default App;
