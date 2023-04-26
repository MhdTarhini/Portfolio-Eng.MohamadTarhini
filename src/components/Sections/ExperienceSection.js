import React from "react"; 
import FullScreenSection from "../FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react";  
import CvCard from "../MinCard";
 
const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "http://www.google.com/",
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "http://www.google.com/",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "http://www.google.com/",
  },
  {
    title: "Event planner 22",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "projects2",
  },
]; 
 
const ExpercienceSection = () => { 
  
 return (
<VStack
      onClick={handleClick(url)}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      cursor="pointer"
      style={{ width: 600, height: 150 }}>
      <Image objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageSrc}
        alt={title} />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
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
 
export default ExpercienceSection;