import { Box, Heading } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";

function CoverLetter() {
  return (
    <>
      {" "}
      <FullScreenSection
        backgroundColor="#14532d"
        isDarkBackground
        p={8}
        alignitems="flex-start"
        spacing={8}>
        <Heading as="h1" id="CoverLetter-section">
          My Cover Letter
        </Heading>
        <Box display="grid" gridTemplateColumns="100%" gridGap={8}>
          <p>Dear Hiring Manager,</p>
          <p>
            My Name is Mohamad Tarhini , I'm from Lebanon ,I interest in the{" "}
            <strong>
              Internship/Junior Front-End Development position at Your Company.
            </strong>
          </p>{" "}
          <p>
            As a recent graduate with a{" "}
            <strong>
              Front-end development certificate from Coursera | Meta.
            </strong>{" "}
            I am excited about the opportunity to apply my skills and knowledge
            to a dynamic and fast work environment. Throughout my courses and
            personal projects, I have gained experience in{" "}
            <strong>HTML, CSS, JavaScript , React and Python Language.</strong>{" "}
          </p>
          <p>
            I have also worked with various web development frameworks such as
            Bootstrap. My understanding of responsive design and{" "}
            <strong>
              user experience (UX) and user interface (UI) principles{" "}
            </strong>
            allows me to create visually appealing and intuitive interfaces. In
            my previous roles, I have demonstrated my ability to collaborate
            with teams, troubleshoot issues, and meet project deadlines.{" "}
          </p>
          <p>
            I am confident that my strong problem-solving skills and attention
            to detail will enable me to thrive in a Junior Front-End Development
            role.
          </p>{" "}
          <p>
            I am eager to join your company and contribute to the development of
            innovative web applications that enhance user experience. Thank you
            for considering my application. I am excited about the opportunity
            to discuss how I can contribute to your team further.
          </p>{" "}
          <p> Sincerely,</p>
          Mohammad Tarhini
        </Box>
      </FullScreenSection>
    </>
  );
}
export default CoverLetter;
