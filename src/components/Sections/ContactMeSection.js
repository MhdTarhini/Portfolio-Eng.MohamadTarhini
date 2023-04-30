import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { 
 Box, 
 DarkMode, 
 Heading, 
 Text, 
 VStack, 
} from "@chakra-ui/react"; 
import FullScreenSection from "../FullScreenSection"; 
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; 
 
const ContactMeSection = () => { 
 const socials = {
   icon: faEnvelope,
   url: "mailto: mohamed_tarhini@live.com",
 };
 
 return (
  <>
   {/* <FullScreenSection
     isDarkBackground
     backgroundColor="#512DA8"
     py={16}
     spacing={8}
     > */}
     <VStack height={"fit-content"} backgroundColor="#512DA8" color={"white"}
    //  w="100%" p={32} alignItems="flex-start"
     >
       <Heading as="h1" id="contactme-section">
         Contact me
       </Heading>
       <Box p={6} rounded="md" w="100%">
         <div style={{ marginBottom: 20 }}>
           <a
             style={{ fontSize: 20 }}
             href={socials.url}
             target="_blank"
             rel="noopener noreferrer">
             <FontAwesomeIcon
               icon={socials.icon}
               size="3x"
               style={{ marginRight: 20 }}
             />{" "}
             Email : Mohamed_Tarhini@live.com
           </a>
         </div>
         <Text style={{ fontSize: 20 }} >
           <FontAwesomeIcon
             icon={faPhone}
             size="3x"
             style={{ marginRight: 20 }}
           />
           +961-76755233
         </Text>
       </Box>
     </VStack>
   {/* </FullScreenSection> */}
  
  </>
 ); 
}; 
 
export default ContactMeSection;