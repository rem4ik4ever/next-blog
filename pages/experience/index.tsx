import React from "react";
import { NextPage } from "next";
import {
  Flex,
  Heading,
  Image,
  Text,
  Box,
  List,
  ListItem,
  ListIcon,
  Link,
  Collapse,
} from "@chakra-ui/core";
import Card from "src/components/Card";
import experience from "./experience";

const ExperiencePage: NextPage = () => {
  const [showPrevious, toggle] = React.useState(false);

  return (
    <Flex direction="column" p="5">
      <Heading as="h1" size="lg" fontWeight="light">
        Experience
      </Heading>
      {experience
        .filter((exp) => exp.relevant)
        .map((exp) => (
          <Card>
            <Flex align="center">
              <Image src={exp.logo} alt="wonolo inc." pr="2" w="12" />
              <Heading as="h2" size="md" fontWeight="normal">
                {exp.name}
              </Heading>
            </Flex>
            <Box pl="12">
              <Text fontWeight="light">{exp.position}</Text>
              <Text color="gray.400">
                {exp.from} - {exp.to}
              </Text>
              <List mt="2">
                {exp.achievements.map((ach) => (
                  <ListItem>
                    <ListIcon icon="check-circle" color="green.500" />
                    {ach}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Card>
        ))}
      <Box textAlign="center">
        <Link
          onClick={(e) => {
            e.preventDefault();
            toggle(!showPrevious);
          }}
        >
          {showPrevious ? "Hide" : "Show"} earlier experience
        </Link>
      </Box>
      <Collapse isOpen={showPrevious}>
        {experience
          .filter((exp) => !exp.relevant)
          .map((exp) => (
            <Card>
              <Flex align="center">
                <Image src={exp.logo} alt="wonolo inc." pr="2" w="12" />
                <Heading as="h2" size="md" fontWeight="light">
                  {exp.name}
                </Heading>
              </Flex>
              <Box pl="12">
                <Text fontWeight="medium">{exp.position}</Text>
                <List mt="2">
                  {exp.achievements.map((ach) => (
                    <ListItem>
                      <ListIcon icon="check-circle" color="green.500" />
                      {ach}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Card>
          ))}
      </Collapse>
    </Flex>
  );
};

export default ExperiencePage;
