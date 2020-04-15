import ErrorPage from "next/error";
import { GetStaticProps } from "next";
import fetch from "node-fetch";
import {
  Flex,
  Box,
  Button,
  IconButton,
  FormControl,
  Input,
  InputRightElement,
  Icon,
  InputGroup,
  Select,
} from "@chakra-ui/core";
import Link from "next/link";
import MyLink from "src/utils/MyLink";
import StatusTag from "src/components/StatusTag";
import { useBlogsFilter } from "src/cms/blogs/hooks";
import { useState } from "react";
import { BlogStatus } from "src/enums/BlogStatus";

const CmsIndex = ({ blogs }) => {
  if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
  });
  const { filteredBlogs } = useBlogsFilter(blogs, filters);
  console.log("FIltered", filteredBlogs);
  return (
    <Flex direction="column">
      <Flex justify="space-around">
        <Link href="/cms/files">
          <Button leftIcon="attachment" variantColor="blue" w="sm">
            Files
          </Button>
        </Link>
        <Link href="cms/files/upload">
          <Button leftIcon="download" variantColor="red" w="sm">
            Upload
          </Button>
        </Link>
      </Flex>
      <Flex align="center" mt="4">
        <FormControl w="full">
          <InputGroup>
            <Input
              type="text"
              name="search"
              placeholder="Filter"
              value={filters.search}
              onChange={(ev) => {
                setFilters({
                  ...filters,
                  search: ev.target.value,
                });
              }}
            />
            <InputRightElement
              children={<Icon name="search" color="gray.500" />}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <Select
            value={filters.status}
            onChange={(ev) => {
              setFilters({
                ...filters,
                status: ev.target.value,
              });
            }}
          >
            <option value="all">ALL</option>
            {Object.keys(BlogStatus).map((status) => (
              <option key={status} value={status}>
                {status.toUpperCase()}
              </option>
            ))}
          </Select>
        </FormControl>
      </Flex>
      {filteredBlogs.map((blog, idx) => (
        <Box key={`blog-${idx}`} backgroundColor="white" p="2" my="2">
          <Flex justify="space-between" align="center">
            <Box>
              <StatusTag mr="2" status={blog.status}>
                {blog.status?.toUpperCase()}
              </StatusTag>
              <MyLink href={`/blog/${blog.slug}`}>{blog.title}</MyLink>
              <pre>{blog.tags}</pre>
            </Box>
            <Link href={`/cms/write/${blog.id}`}>
              <IconButton icon="edit" aria-label="edit post" />
            </Link>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const payload = await (
      await fetch(`${process.env.HOST_URL}/api/blogs`)
    ).json();
    const blogs = payload.sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.log("Erro", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
};

export default CmsIndex;
