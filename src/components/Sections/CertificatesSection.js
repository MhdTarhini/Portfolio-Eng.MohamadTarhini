import React from "react"; 
import FullScreenSection from "../FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import CardLg from "../Card";
import { faCertificate} from "@fortawesome/free-solid-svg-icons";

 
const MetaCertificate = {
  title: "Meta Front-End Developer Professional Certificate",
  company: "Coursera | META",
  thisIcon:faCertificate,
  description:
      "Including 9 courses certificate like JavaScript , HTML & CSS , Version Control , React Basic and Advanced React , UX/UI Design and more .",
    getImageSrc: () => require("../images/Meta Front-End Developer Professional Certificate_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/professional-cert/QPZEB9CX2UD7",

}
const Certificates = [
  {
    title: "Programming with JavaScript",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "Creating JavaScript codes, Creating and manipulating objects and arrays ",
    getImageSrc: () => require("../images/Programming with JavaScript - Coursera-Meta_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/JJ73Z2ETEBUF",
  },
  {
    title: "ReactJs Advanced",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior, Interact with a remote server and fetch and post data via an API, Seamlessly test React applications with React Testing Library & Integrate commonly used React libraries to streamline your application development",
    getImageSrc: () => require("../images/ReactJs Advanced_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/77VYP6EXJC6Z",
  },
  {
    title: "Principles of UX-UI Design",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "Describe the fundamentals of User, Experience (UX) design and research, Describe accessibility considerations in design, Practice developing user empathy through research & Create wireframes and prototypes in Figma",
    getImageSrc: () => require("../images/Principles of UX-UI Design_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/FPXKFHULYLXA",
  },
  {
    title: "Version Control",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "Implement Version Control systems, Navigate and configure using the command line, Use a GitHub repository. Create a GitHub repository, Manage code revisions",
    getImageSrc: () => require("../images/Version Control -Coursera - Meta_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/KCPUVY8SA6JG",
  },
  {
    title: "HTML and CSS in Depth",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "Create a simple form with a responsive layout using HTML5 and CSS, Create a responsive layout using CSS, Create a UI using Bootstrap & Implement debugging tools",
    getImageSrc: () => require("../images/HTML and CSS in Depth - Coursera - Meta_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/SA5R88Y3RW9J",
  },
  {
    title: "ReactJs Basics",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/ReactJs Basics - Coursera Meta_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/VZJNKAGYQ5L5",
  },
  {
    title: "Coding Interview Preperation",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "Pseudocode, Algorithms, Communication, Data Structure, Generale Computer Science",
    getImageSrc: () => require("../images/Coding Interview Preperation - Coursera - Meta_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/6RU6U5GAL7TP",
  },
  {
    title: "Front-End developer Capstone",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "Design and style a responsive User Interface (UI), Demonstrate clean and bug free coding, Use React components to create multiple views & Create a website front-end using React JS and JavaScript",
    getImageSrc: () => require("../images/Front-End developer Capstone - coursera - Meta_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/S5RU6GUR87BV",
  },
  {
    title: "Inroducrion to front-end Developmente",
    company: "Coursera | META",
    thisIcon:faCertificate,
    description:
      "Distinguish between front-end, back-end and full-stack developers, Create and style a webpage with HTML and CSS & The benefits of working with UI frameworks",
    getImageSrc: () => require("../images/Inroducrion to front-end Development_page-0001.jpg"),
    url: "https://www.coursera.org/account/accomplishments/verify/VWR4M9FNQP9B",
  },
]; 
 
const CerticatesSection = () => { 
  
 return (
   <FullScreenSection
     backgroundColor="#14532d"
     isDarkBackground
     p={8}
     alignitems="flex-start"
     spacing={8}>
     <Heading as="h1" id="DevelopmentCertificates-section">
       Front-End Development Certificates
     </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1,minmax(0,1fr))"
        gridGap={8}
        >
          <CardLg
          cursor={"pointer"}
          thisIcon={MetaCertificate.thisIcon}
           key={MetaCertificate.title}
           title={MetaCertificate.title}
           company={MetaCertificate.company}
           url={MetaCertificate.url}
           description={MetaCertificate.description}
           imageSrc={MetaCertificate.getImageSrc()}
         />
    </Box>
      <Box
        display="grid"
        justifyContent={"flex-start"}
        gridTemplateColumns="repeat(auto-fill,minmax(300px,1fr))"
        //  gridTemplateColumns="repeat(auto-fill,200px)"
        gridGap={8}
        >
        {Certificates.map((ele) => (
          <CardLg
          cursor={"pointer"}
           key={ele.title}
           title={ele.title}
           company={ele.company}
           url={ele.url}
           description={ele.description}
           imageSrc={ele.getImageSrc()}
           thisIcon={ele.thisIcon}
         />
        ))}
    </Box>
   </FullScreenSection>
 ); 
}; 
 
export default CerticatesSection;

     {/* <Box
       display="grid"
       gridGap={8}>
         <VStack
      onClick={() => {window.open(MetaCertificate.url)}}
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="xl"
      width={1000}
      >
      <Image borderRadius="xl" src={MetaCertificate.getImageSrc()} alt={MetaCertificate.title} height={700} width={1000}/>
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            <FontAwesomeIcon icon={MetaCertificate.thisIcon} size="1x" />
            {MetaCertificate.title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg">
          {MetaCertificate.company}
        </Text>
        <Text color="#64748b" fontSize="lg">
          {MetaCertificate.description}
        </Text>
      </VStack>
    </VStack>
      </Box> */}