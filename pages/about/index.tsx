import { NextPage } from "next";
import { Flex, Heading, Text as Txt, Box, Image } from "@chakra-ui/core";
import MyLink from "src/utils/MyLink";
import spacetime from "spacetime";

const Paragraph = (props) => (
  <Box mt="4" {...props}>
    {props.children}
  </Box>
);

const Text = (props) => (
  <Txt fontSize="xl" lineHeight="tall" {...props}>
    {props.children}
  </Txt>
);

const AboutPage: NextPage = () => {
  const dob = spacetime("March 16th, 1993");
  const now = spacetime(new Date());
  return (
    <Flex direction="column" p="5">
      <Heading as="h1" size="xl" fontWeight="light">
        Hi there!
      </Heading>
      <Paragraph>
        <Text>
          My name is Rem. I'm {dob.diff(now, "year")} years old and I'm a
          Software Engineer. I was born in Uzbekistan, but moved when I was 3
          years old to{" "}
          <MyLink href="https://goo.gl/maps/V5Ez4s6TaWCW3PFQ9">
            Kyrgyzstan
          </MyLink>{" "}
          and lived in a small, but very green city{" "}
          <MyLink href="https://en.wikipedia.org/wiki/Bishkek">Bishkek</MyLink>.
        </Text>
      </Paragraph>
      <Flex direction="column" align="center" my="5">
        <Image src="/imgs/bishkek.jpg" alt="Bishkek" w="md" />
        <Text fontSize="sm" color="gray.700">
          Bishkek
        </Text>
      </Flex>
      <Paragraph>
        <Text>
          I got my bachelor degree from{" "}
          <MyLink href="https://auca.kg/">
            American University of Central Asia (AUCA)
          </MyLink>
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
          <Image src="/imgs/liam.png" alt="My Kid" w="md" />
        </Flex>
      </Paragraph>
      <Paragraph>
        <Text>
          I like reading books, playing computer games and geeking out about new
          technologies and tech stacks also I used to skateboard when I was in
          school here is a cool pic of me!
        </Text>
        <Flex direction="column" align="center" my="5">
          <Image src="/imgs/skateboard.jpg" alt="Skateboard Pro" w="md" />
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
