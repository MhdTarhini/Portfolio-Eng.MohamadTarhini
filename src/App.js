import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ExpercienceSection from "./components/Sections/ExperienceSection";
import ContactMeSection from "./components/Sections/ContactMeSection";
import Footer from "./components/Footer";
import UniversityEducationSection from "./components/Sections/UniversityEducationSection";
import CvSection from "./components/Sections/CvSection";
import CoverLetter from "./components/Sections/CoverLetterSection";
import DevelopmentProjectsSection from "./components/Sections/DevelopmentProjectsSection";
import EngineeringProjectsSection from "./components/Sections/EngineeringProjectsSection";
import SkillsSection from "./components/Sections/SkillsSection";
import CertificatesSection from "./components/Sections/CertificatesSection"

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <LandingSection />
        <CoverLetter />
        <CvSection />
        <ExpercienceSection />
        <UniversityEducationSection />
        <CertificatesSection/>
        <EngineeringProjectsSection/>
        <DevelopmentProjectsSection/>
        <SkillsSection/>
        <ContactMeSection />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
