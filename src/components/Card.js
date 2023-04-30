import {
  Heading,
  HStack,
  Image,
  Text,
  useRangeSliderContext,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const CardLg = ({ title, description , date , company , imageSrc, url , thisIcon , cursor}) => {
  const handleClick = (anchor) => () => {
    if(url) { window.open(anchor)}
  };
  return (
    <VStack
      onClick={handleClick(url)}
      color="black"
      backgroundColor="white"
      cursor={cursor}
      borderRadius="xl">
      <Image borderRadius="xl" src={imageSrc} alt={title} />
      <VStack spacing={4} p={4}  alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            <FontAwesomeIcon icon={thisIcon} size="1x" />
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg">
          {company}
        </Text>
        <Text color="#64748b" fontSize="lg">
          {date}
        </Text>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
          <p>see more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default CardLg;
