import React from "react";
import { Flex, Heading, Grid, Text, Box } from "@chakra-ui/core";
import Card from "src/components/Card";
import MyLink from "src/utils/MyLink";
import { BlogInterface } from "src/interfaces/Blog";
import Image from "next/image";
import Link from "next/link";

const RecentPosts = ({ blogs, label }) => {
  return (
    <Flex direction="column" w="full">
      <Heading as="h2" size="xl" mt="3" fontWeight="regular" textAlign="center">
        {label}
      </Heading>
      {blogs.map((blog: BlogInterface) => (
        <Link href={`/blog/${blog.slug}`} key={blog.id}>
          <Box key={`blog-${blog.slug}`} cursor="pointer">
            <Card p="0">
              <Flex direction="row">
                <Box p="3">
                  <MyLink href={`/blog/${blog.slug}`}>
                    <Heading as="h3" size="sm" my="3">
                      {blog.title}
                    </Heading>
                  </MyLink>
                  <Flex>
                    <Text fontSize="sm">{blog.tldr}</Text>
                  </Flex>
                </Box>
              </Flex>
            </Card>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default RecentPosts;
