import React, { useState } from "react";
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
  Collapse
} from "@chakra-ui/core";
import Card from "src/components/Card";
import experience from "src/pages/experience/experience";
import ExperienceCard from "./ExperienceCard";

const ExperienceContent = () => {
  const [showPrevious, toggle] = useState(false);

  return (
    <Flex direction="column" p="5">
      <Heading as="h1" size="lg" fontWeight="light">
        Experience
      </Heading>
      {experience
        .filter(exp => exp.relevant)
        .map((exp, index) => (
          <ExperienceCard experience={exp} key={`exp-${index}`} />
        ))}
      <Box textAlign="center">
        <Link
          onClick={e => {
            e.preventDefault();
            toggle(!showPrevious);
          }}
        >
          {showPrevious ? "Hide" : "Show"} earlier experience
        </Link>
      </Box>
      <Collapse isOpen={showPrevious}>
        {experience
          .filter(exp => !exp.relevant)
          .map((exp, index) => (
            <ExperienceCard experience={exp} key={`exp-{index}`} />
          ))}
      </Collapse>
    </Flex>
  );
};

export default ExperienceContent;
