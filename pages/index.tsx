import { NextPage, GetStaticProps } from "next";
import { Flex } from "@chakra-ui/core";
import Intro from "src/pages/home/Intro";
import LinksSection from "src/pages/home/LinksSection";
import BlogsList from "src/pages/home/BlogsList";
import { BlogStatus } from "src/enums/BlogStatus";
import { allBlogs } from "src/cms/blogs/utils";
import { BlogInterface } from "src/interfaces/Blog";
import { PageInfo } from "src/interfaces/PageInfo";
import defaultConfig from "src/utils/SEO/next-seo.config";
import PageSEO from "src/components/PageSEO";
import { SubscriptionForm } from "src/components/SubscriptionForm";

const IndexPage: NextPage<{ blogs: BlogInterface[] }> = ({ blogs }) => {
  return (
    <Flex flexDirection="column" alignItems="center" m={4}>
      <PageSEO pageInfo={defaultConfig} />
      <div className="max-w-xl">
        <Intro />
        <LinksSection mt="3" w="full" />
        <div className="shadow-md rounded-md">
          <SubscriptionForm />
        </div>



        <script type="text/javascript" src="https://nolli.app/js/iframeResizer.min.js"></script>
        <iframe id="nolli-iframe" src="https://nolli.app/w/clalhkktg0000l3081ql45qqm" frameBorder="0" scrolling="no" width="100%" />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `iFrameResize({log: false, checkOrigin: false}, "#nolli-iframe");`
        }}></script>


        <BlogsList blogs={blogs} label="Recent Blogs" />
      </div>
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const blogs = allBlogs();
    const sortedBlogs = blogs.sort((a, b) => {
      if (a.releasedAt > b.releasedAt) return -1;
      if (a.releasedAt < b.releasedAt) return 1;
      return 0;
    });
    return {
      props: {
        blogs: sortedBlogs.filter(
          (blog) => blog.status === BlogStatus.released
        ),
      },
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
      },
    };
  }
};

export default IndexPage;
