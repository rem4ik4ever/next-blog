import React from "react";
import Card from 'src/components/Card'
import {
  Flex,
  Image,
  Heading,
  Box,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/core'

const ExperienceCard = ({experience}) => {
  return (
    <Card>
      <Flex align="center">
        <Image src={experience.logo} alt="wonolo inc." pr="2" w="12" />
        <Heading as="h2" size="md" fontWeight="light">
          {experience.name}
        </Heading>
      </Flex>
      <Box pl="12">
        <Text fontWeight="light">{experience.position}</Text>
        <List mt="2">
          {experience.achievements.map((ach, idx) => (
            <ListItem key={`experience-${idx}`}>
              <ListIcon icon="check-circle" color="green.500" />
              {ach}
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
};


export default ExperienceCard;
