import { NextPage } from "next";
import { Box, Flex, useColorMode, DarkMode } from "@chakra-ui/core";
import styled from "@emotion/styled";
import PageFooter from "./footer";
import HeadMeta from "./HeadMeta";
import PageHeader from "./Header/header";

const Main = styled(Flex)(() => ({
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh"
}));

const Container = styled(Box)(({ theme }) => {
  return {
    flexGrow: 1
  };
});

const BasicLayout: NextPage = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.50",
    dark: "gray.600"
  };
  const textColor = {
    light: "",
    dark: "white"
  };
  return (
      <Main backgroundColor={bgColor[colorMode]} color={textColor[colorMode]}>
        <HeadMeta />
        <PageHeader />
        <Container
          width={{ base: "100%", md: "2xl" }}
          p="4"
          fontSize={"xl"}
          lineHeight="tall"
        >
          {children}
        </Container>
        <PageFooter />
      </Main>
  );
};

export default BasicLayout;
