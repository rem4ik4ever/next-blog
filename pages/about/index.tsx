import { NextPage } from "next";
import {
  Flex,
  Heading,
  Text as Txt,
  Box,
  Image,
  Link,
  useColorMode
} from "@chakra-ui/core";
import MyLink from "src/utils/MyLink";
import spacetime from "spacetime";
import Head from "next/head";
import PageSEO from "src/components/PageSEO";
import defaultConfig from "src/utils/SEO/next-seo.config";

const Paragraph = props => (
  <Box mt="4" {...props}>
    {props.children}
  </Box>
);

const Text = props => (
  <Txt fontSize="xl" lineHeight="tall" {...props}>
    {props.children}
  </Txt>
);

const AboutPage: NextPage = () => {
  const { colorMode } = useColorMode();
  const dob = spacetime("March 16th, 1993");
  const now = spacetime(new Date());
  const color = {
    light: "",
    dark: "white"
  };
  const config = {
    ...defaultConfig,
    title: "About me",
    description: "A little bit about me!",
    url: "https://remkim.com/about"
  };
  return (
    <Flex direction="column" p="5" color={color[colorMode]}>
      <PageSEO pageInfo={config} />
      <Heading as="h1" size="xl" fontWeight="light">
        Hi there!
      </Heading>
      <Paragraph>
        <Text>
          My name is Rem. I'm {dob.diff(now, "year")} years old and I'm a
          Software Engineer. I was born in Uzbekistan, but moved when I was 3
          years old to{" "}
          <Link href="https://goo.gl/maps/V5Ez4s6TaWCW3PFQ9">Kyrgyzstan</Link>{" "}
          and lived in a small, but very green city{" "}
          <Link href="https://en.wikipedia.org/wiki/Bishkek">Bishkek</Link>.
        </Text>
      </Paragraph>
      <Flex direction="column" align="center" my="5">
        <Image
          src="https://rem-blog-bucket.s3.us-east-2.amazonaws.com/assets/9ee9d79e-840a-4f31-b12b-452b332ccf43-450.png"
          alt="Bishkek"
          w="md"
        />
        <Text fontSize="sm" color="gray.700">
          Bishkek
        </Text>
      </Flex>
      <Paragraph>
        <Text>
          I got my bachelor degree from{" "}
          <Link href="https://auca.kg/">
            American University of Central Asia (AUCA)
          </Link>
          , where I studied Software Engineering. I immediately fell in love
          with Programming. Solving problems and coding something useful. That
          is why I consider myself as a problem solver.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text>
          I started working from my senior year in university and since then
          never stopped. Worked my way to Internship in Canada and few years
          later migrated to Canada with my family.
        </Text>
      </Paragraph>
      <Paragraph>
        <Text>
          Speaking of family, I'm a son, brother and a dad. I have a 2-year-old
          son and my family is everything for me.
        </Text>
        <Flex direction="column" align="center" my="5">
          <Image
            src="https://rem-blog-bucket.s3.us-east-2.amazonaws.com/assets/15fe05d7-0e35-41ce-999c-ae2b8e0334d0-450.png"
            alt="My Kid"
            w="md"
          />
        </Flex>
      </Paragraph>
      <Paragraph>
        <Text>
          I like reading books, playing computer games and geeking out about new
          technologies and tech stacks also I used to skateboard when I was in
          school here is a cool pic of me!
        </Text>
        <Flex direction="column" align="center" my="5">
          <Image
            src="https://rem-blog-bucket.s3.us-east-2.amazonaws.com/assets/9a7bd470-7358-4041-aa3a-b98deab70a6d-450.png"
            alt="Skateboard Pro"
            w="md"
          />
        </Flex>
      </Paragraph>
      <Paragraph my="8">
        <Heading as="h2" size="lg" fontWeight="normal">
          Thanks for reading! More in my{" "}
          <MyLink href="/blog" passHref>
            blog
          </MyLink>
          !
        </Heading>
      </Paragraph>
    </Flex>
  );
};

export default AboutPage;
