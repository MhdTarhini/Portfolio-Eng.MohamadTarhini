import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Eng.Mohamad Tarhini!"; 
const bio = "Front-End Development";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365">
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src="https://i.pravatar.cc/150?img=7"
          size="2xl"
          name="Your Name"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading style={{ height: 80 }} as="h1" size="2xl" noOfLines={1}>
          {bio}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
); 
 
export default LandingSection;