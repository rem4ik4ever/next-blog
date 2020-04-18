import React from "react";
import { Flex, Heading, Image, Grid, Text, Box } from "@chakra-ui/core";
import Card from "src/components/Card";
import MyLink from "src/utils/MyLink";

const RecentPosts = ({ blogs }) => {
  return (
    <Flex direction="column" w="full">
      <Heading as="h2" size="xl" mt="3" fontWeight="regular" textAlign="center">
        Recent posts
      </Heading>
      <Grid templateColumns={["repeat(2, 1fr)", "repeat(1, 1fr)"]} gap="2">
        {blogs.map(blog => (
          <Box key={`blog-${blog.slug}`}>
            <Card p="0">
              <Flex direction="column">
                <Image src={blog.thumbnailUrl} w="full" />
                <Box p="3">
                  <Heading as="h3" size="xl" my="3">
                    {blog.title}
                  </Heading>
                  <Text>{blog.tldr}</Text>
                    <MyLink href={`/blog/${blog.slug}`}>Read more</MyLink>
                </Box>
              </Flex>
            </Card>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};

export default RecentPosts;
