import { NextPage } from "next";
import { Box, Flex, useColorMode } from "@chakra-ui/core";
import styled from "@emotion/styled";
import PageHeader from "./header";
import PageFooter from "./footer";

const Main = styled(Flex)(() => ({
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
}));

const Container = styled(Box)(({ theme }) => {
  return {
    flexGrow: 1,
  };
});

const BasicLayout: NextPage = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.50",
    dark: "gray.600",
  };
  const textColor = {
    light: "",
    dark: "white",
  };
  return (
    <Main backgroundColor={bgColor[colorMode]} color={textColor[colorMode]}>
      <PageHeader />
      <Container width={{ base: "100%", md: "2xl" }} p="4">
        {children}
      </Container>
      <PageFooter />
    </Main>
  );
};

export default BasicLayout;
