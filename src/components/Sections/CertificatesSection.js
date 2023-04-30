import React from "react"; 
import FullScreenSection from "../FullScreenSection"; 
import { Box, Heading} from "@chakra-ui/react";  
import MinCard from "../MinCard";
 
const experience = [
  {
    title: "WFP Projects Supervisor",
    Date:"20/06/2022 - 05/11/2022",
      company:"IPSOS Company",
      description:"In several projects (Impact, World Food Program,..), my tasks was data organization and distribution the surveyors and give them they daily tasks, daily and weekly reports, plus daily field & data control. ",
    getImageSrc: () => require("../images/WfpLogo.png"),
  },
  {
    title: "UNICEF Project Supervisor",
     Date:"07/03/2022 - 20/05/2022",
      company:"IPSOS Company",
      description:"Project about the anemia for Lebanese children (SMART Project) my tasks was provided guidance and training to team members, ensuring that all activities were completed accurately and on time, make daily reports.",
    getImageSrc: () => require("../images/UnicefLogo.png"),
  },
  {
    title: "Training Office Enginer",
    Date:"27/09/2021 - 07/12/2021",
      company:"Ebco Bitar Company",
      description:"Design building , moduling building and assign load on Etabs, check slab and fondation design & punching on Safe & S-concrete, using Robot & Revit.",
    getImageSrc: () => require("../images/officeEngineer.jpg"),
  },
  {
    title: "Training Site Enginer",
          Date:"07/04/2021 - 18/08/2021",
      company:"Hassib Ibrahim Company",
      description:"My tasks were to supervise the reinforcement works, shop drawings, excavation work, weekly and daily reports.",
    getImageSrc: () => require("../images/SiteEngineer.jpg"),
  },
  {
    title: "Promoter & Supervisor",
    Date:"2015-2020",
      company:"Merlun Group Company",
      description:"Promotion and sales Nestle Company machines in market, supervisor on south area.",
    getImageSrc: () => require("../images/NestleCompnay.jpg"),
  },
]; 
 
const ExperienceSection = () => { 
  
 return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignitems="flex-start"
      spacing={8}>
      <Heading as="h1" id="Experience-section">
        Experience
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
        >
        {experience.map((ele) => (
          <MinCard
          key={ele.title}
        title={ele.title}
        company={ele.company}
        Date={ele.Date}
        description={ele.description}
        imageSrc={ele.getImageSrc()}
        />
        ))}
        
      </Box>
    </FullScreenSection>
 )
}; 
 
export default ExperienceSection;