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

const ExperiencePage: NextPage = () => {
  const [showPrevious, toggle] = React.useState(false);
  const experience = [
    {
      name: "Wonolo: In-Demand Staffing Solutions for Businesses",
      position: "Full Stack Software Engineer",
      from: "Jan. 2020",
      to: "Present",
      logo: "/imgs/wonolo.webp",
      relevant: true,
      achievements: [
        "Implemented data syncronization with Salesforce Integration",
        "Migrated Rails pages to React.js App",
        "Improved global Search performance from 24s per query to 400ms",
      ],
    },
    {
      name: "JEWLR: Personalized Jewelry",
      position: "Full Stack Software Engineer",
      from: "Oct. 2018",
      to: "Jan. 2020",
      logo: "/imgs/jewlr.svg",
      relevant: true,
      achievements: [
        "Implemented server-to-server communication API reducing number of calls by 50%",
        "Implemented single checkout API to process multiple types of payments",
        "Developed Tax API to fetch tax rates depending on location",
        "Created React.js modal component, replacing all JQuery modals in the application",
      ],
    },
    {
      name: "EventIQ inc. (Currently RightLabs inc.)",
      position: "Full Stack Software Engineer",
      from: "Oct. 2014",
      to: "Sep. 2018",
      logo: "/imgs/eventiq.png",
      relevant: true,
      achievements: [
        "Designed application Architecture and UI design",
        "Payment gateways integration",
        "Developing Front and Back end functionality of application",
        "Providing testing of server and client side",
      ],
    },
    {
      name: "LogiSense Ltd. - Information Technology & Services",
      position: "Web Developer",
      from: "Feb. 2014",
      to: "Sep. 2018",
      logo: "/imgs/logisense.png",
      relevant: false,
      achievements: [
        "Maintained specific parts of application",
        "Worked on code optimization and refactoring",
        "Participated in international meetings with parent company and chief developers",
        "Contributed to a angular-ui-grid repository as a part of a job",
      ],
    },
    {
      name: "Inkubasia ",
      position: "Web Developer",
      from: "May. 2013",
      to: "Sep. 2013",
      logo: "/imgs/inkubasia.png",
      relevant: false,
      achievements: [
        "WordPress and Joomla template customizations",
        "Design templates and plugins",
        "Installing and customizing plugins",
        "Managing content",
        "Developing applications from design prototypes and documentation",
      ],
    },
  ];

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
