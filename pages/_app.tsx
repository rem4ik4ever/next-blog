import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import BasicLayout from "../src/components/layout";
import theme from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ThemeProvider>
  );
};
export default App;
