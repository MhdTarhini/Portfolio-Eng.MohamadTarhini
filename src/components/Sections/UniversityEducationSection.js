import React from "react";
import FullScreenSection from "../FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardLg from "../Card";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = [
  {
    title: "Bachelor's in Civil Engineering",
    icon:faGraduationCap,
    description:"During this journey i'm improving my knowledge in Research Methods and using SPSS Software, Statistics, Corporate Govern",
    date:"2015-2020",
    university:"Islamic University of lebanon",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Master of Business Administration",
    icon:faGraduationCap,
    date:"2021-Present",
    university:"Islamic University of lebanon",
    description:"During this journey i'm improving my knowledge in Research Methods and using SPSS Software, Statistics, Corporate Governance , Financial Accounting.",   
    getImageSrc: () => require("../images/photo2.jpg"),
  },
];

const UniversityEducationSection = () => {
  return (
   <FullScreenSection
     backgroundColor="#14532d"
     isDarkBackground
     p={8}
     alignitems="flex-start"
     spacing={8}>
     <Heading as="h1" id="UniversityEducation-section">
       University Education
     </Heading>
     <Box
       display="grid"
       gridTemplateColumns="repeat(2,minmax(0,1fr))"
       gridGap={8}>
       {Education.map((ele) => (
         <CardLg
           key={ele.title}
           title={ele.title}
           description={ele.description}
           date={ele.date}
           company={ele.university}
           thisIcon={ele.icon}
           imageSrc={ele.getImageSrc()}
         />
       ))}
     </Box>
   </FullScreenSection>
  );
};

export default UniversityEducationSection;