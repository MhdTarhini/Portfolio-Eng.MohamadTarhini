import React from "react";
import FullScreenSection from "../FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import MinCard from "../MinCard";

const projects = [
  {
    title: "Experience",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/imp-of-work-ex.jpg"),
    url: "Experience",
  },
  {
    title: "University Education",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/education.jpg"),
    url: "UniversityEducation",
  },
  {
    title: "Front-End Development Certificates",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/certificate.webp"),
    url: "DevelopmentCertificates",
  },
  {
    title: "Civil Engineering Projects",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/civil.png"),
    url: "EngineeringProjects",
  },
  {
    title: "Front-End Development Projects",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/development-scaled.jpg"),
    url: "DevelopmentProjects",
  },
  {
    title: "Skills & Coding language",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/skills.jpg"),
    url: "Skills",
  },
];

const CvSection = () => {
    const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    console.log(id);
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignitems="flex-start"
      spacing={8}>
      <Heading as="h1" id="CV-section">
        My CV
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}>
        {projects.map((ele) => (
          <MinCard
          handleClick={handleClick(ele.url)}
          cursor={"pointer"}
            key={ele.title}
            title={ele.title.toUpperCase()}
            description={ele.description}
            imageSrc={ele.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CvSection;
