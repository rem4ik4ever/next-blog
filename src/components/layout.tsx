import { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/core";
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
  return (
    <Main backgroundColor="gray.50">
      <PageHeader />
      <Container
        width={{ base: "100%", md: "3xl" }}
        my="4"
        // backgroundColor="white"
        // boxShadow="sm"
      >
        {children}
      </Container>
      <PageFooter />
    </Main>
  );
};

export default BasicLayout;
