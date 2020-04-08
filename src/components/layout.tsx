import { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/core";
import styled from "@emotion/styled";
import PageHeader from "./header";
import PageFooter from "./footer";

const Main = styled(Flex)(() => ({
  width: "100%",
  height: "100vh",
  flexDirection: "column",
  alignItems: "center",
}));

const Container = styled(Box)(({ theme }) => {
  return {
    flexGrow: 1,
  };
});

const BasicLayout: NextPage = ({ children }) => {
  return (
    <Main backgroundColor="gray.50">
      <PageHeader />
      <Container width={{ base: "100%", md: "70%" }}>{children}</Container>
      <PageFooter />
    </Main>
  );
};

export default BasicLayout;
