import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { BlogInterface } from "src/interfaces/Blog";
import BlogContent from "src/pages/blog/BlogContent";
import { allBlogs } from "src/cms/blogs/utils";
import PageSEO from "src/components/PageSEO";
import defaultConfig from "src/utils/SEO/next-seo.config";
import { PageInfo } from "src/interfaces/PageInfo";

const BlogPage: NextPage<{ blog: BlogInterface }> = ({ blog }) => {
  const siteUrl = `https://remkim.com/blog/${blog.slug}`;
  const config: PageInfo = {
    ...defaultConfig,
    title: blog.title,
    description: blog.tldr,
    canonical: siteUrl,
    openGraph: {
      url: siteUrl,
      title: blog.title,
      description: blog.tldr,
      site_name: "Rem Kim",
      locale: 'en-US',
      images: [
        {
          url: blog.thumbnailUrl
        }
      ]
    }
  };
  return (
    <>
      <PageSEO pageInfo={config} />
      <BlogContent blog={blog} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const blogs = allBlogs();
    const slugs = blogs.map(x => x.slug);
    const paths = slugs.map(slug => ({
      params: {
        slug
      }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error("Static patch err:", error.message);
    return {
      paths: [],
      fallback: false
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  try {
    const payload = allBlogs();
    const blog = payload.find(bl => bl.slug === slug);

    return {
      props: {
        blog
      }
    };
  } catch (error) {
    console.error("Static prop err: ", error);
    return {
      props: { blog: null }
    };
  }
};

export default BlogPage;
